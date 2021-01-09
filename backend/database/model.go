package database

import (
	"fmt"
	"os"

	"github.com/go-pg/pg/v10"
)

// Connect is responsible for connecting to the Postgres database
func Connect() *pg.DB {
	db := pg.Connect(&pg.Options{
		User:     os.Getenv("PGUSER"),
		Password: os.Getenv("PGPASSWORD"),
		Database: os.Getenv("PGDATABASE"),
		Addr:     fmt.Sprintf("%s:%d", os.Getenv("PGHOST"), 5432),
	})

	err := CreateSchema(db)
	if err != nil {
		fmt.Printf("Schema already exists\n")
	}

	// user1 := &model.User{
	// 	FirstName: "admin",
	// 	LastName:  "admin",
	// 	Email:     "test1@test.com",
	// }
	// _, err = db.Model(user1).Insert()
	// if err != nil {
	// 	fmt.Print(err)
	// }

	// Select user by primary key.
	// user := &model.User{ID: user1.ID}
	// err = db.Model(user).WherePK().Select()
	// if err != nil {
	// 	fmt.Print(err)
	// }

	// Select all users.
	// var users []model.User
	// err = db.Model(&users).Select()
	// if err != nil {
	// 	fmt.Print(err)
	// }

	return db
}
