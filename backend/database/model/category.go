package model

import "github.com/jinzhu/gorm"

type Category struct {
	gorm.Model
	Name     string
	CourseID int `gorm:"TYPE:integer REFERENCES courses"`
	Course   Course
}
