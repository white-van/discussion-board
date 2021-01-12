cd $(dirname $0)

PGUSER=postgres
PGHOST=localhost
PGPASSWORD=postgres
PGDATABASE=postgres
PGPORT=5432

initilize=$(psql -f scripts/discussion-board.sql)
