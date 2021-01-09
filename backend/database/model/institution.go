package model

import "fmt"

type Institution struct {
	ID       int
	Name     string `pg:"type:varchar(255)"`
	Location string `pg:",notnull,type:varchar(255)"`
}

func (i Institution) String() string {
	return fmt.Sprintf("Institution<%d, %s, %s>", i.ID, i.Name, i.Location)
}
