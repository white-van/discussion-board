#!/usr/bin/python3
import yaml
import os

template = None
build = None

with open('table.tmpl', 'r') as file:
    template = file.read()
with open('build.tmpl', 'r') as file:
    build = file.read()

with open("model.yaml", 'r') as stream:
    try:
        model = yaml.safe_load(stream)
        structs = []
        for table in model['tables']:
            name = table['name']
            structs.append("(*model.{0})(nil),\n".format(name))
            fChar = name.lower()[0]
            fields = []

            specifier = []
            values = []
            for field in table['fields']:
                tags = ""
                prev = False
                if 'notnull' in field:
                    tags += ",notnull"
                    prev = True
                if 'unique' in field:
                    tags += ",unique"
                    prev = True
                if 'pk' in field:
                    tags += ",pk"
                    prev = True
                if field['type'] == 'string' and 'length' in field:
                    if prev:
                        tags += ","
                    tags += "type:varchar({0})".format(field['length'])
                    prev = True
                if 'rel' in field:
                    if prev:
                        tags += ","
                    tags += "rel:{0}".format(field['rel'])
                    prev = True
                    fields.append("\t{0}ID {1}".format(field['name'], 'int'))
                if prev:
                    fields.append("\t{0} {1} `pg:\"{2}\"`".format(field['name'], field['type'], tags))
                else:
                    fields.append("\t{0} {1}".format(field['name'], field['type']))
                if field['type'] == 'int':
                    specifier.append(r'%d')
                elif field['type'] == 'string':
                    specifier.append(r'%s')
                else:
                    specifier.append(r'%v')                
                values.append("{0}.{1}".format(fChar, field['name']))
            
            with open('../database/model/{0}.go'.format(name.lower()), 'w') as out:
                out.write(template.format(name, fChar, "\n".join(fields), ", ".join(specifier), ", ".join(values)))
            os.system('gofmt -w ../database/model/{0}.go'.format(name.lower()))
        
        with open('../database/{0}.go'.format('build'), 'w') as out:
            out.write(build.format(''.join(structs)))
        os.system('gofmt -w ../database/{0}.go'.format('build'))

    except yaml.YAMLError as exc:
        print(exc)
