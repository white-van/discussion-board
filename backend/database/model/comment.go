package model

import "github.com/jinzhu/gorm"

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
