package model

import "github.com/jinzhu/gorm"

// Comment represents the schema for the comments table in postgres
type Comment struct {
	gorm.Model
	CourseID int `gorm:"TYPE:integer REFERENCES courses"`
	Course   Course
	AuthorID int `gorm:"TYPE:integer REFERENCES users"`
	Author   User
	ParentID int `gorm:"TYPE:integer REFERENCES threads"`
	Parent   Thread
	Body     string
}
