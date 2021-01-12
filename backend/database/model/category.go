package model

import "github.com/jinzhu/gorm"

// Category represents the schema for the categories table in postgres
type Category struct {
	gorm.Model
	Name     string
	CourseID int `gorm:"TYPE:integer REFERENCES courses"`
	Course   Course
}
