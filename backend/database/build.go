package database

import (
	"fmt"

	"github.com/go-pg/pg/v10"
	"github.com/go-pg/pg/v10/orm"

	"pizza/database/model"
)

// CreateSchema creates database schema for User and Story models.
func CreateSchema(db *pg.DB) error {
	models := []interface{}{
		(*model.User)(nil),
		(*model.Institution)(nil),
		(*model.Administrator)(nil),
	}

	for _, model := range models {
		err := db.Model(model).CreateTable(&orm.CreateTableOptions{
			Temp: false,
		})
		if err != nil {
			_ = fmt.Errorf("%w", err)
		}
	}
	return nil
}
