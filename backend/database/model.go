package database

import (
	"pizza/database/model"

	"github.com/jinzhu/gorm"
)

// CreateSchema creates the initial schema for the application model using GORM.
func CreateSchema(db *gorm.DB) {
	db.AutoMigrate(
		&model.User{},
		&model.Institution{},
		&model.Administrator{},
		&model.Semester{},
		&model.Course{},
		&model.Enrolment{},
		&model.Category{},
		&model.Thread{},
		&model.NotePost{},
		&model.Comment{},
		&model.Vote{},
	)
	// TODO: krish, remove this, leaving for reference on Gorm syntax
	// uoft := model.Institution{Name: "uoft", Location: "toronto"}
	// db.Create(&uoft)
	// db.Create(&model.Administrator{User: model.User{FirstName: "test"}, Institution: uoft})
}
