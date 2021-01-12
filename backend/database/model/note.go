package model

import "github.com/jinzhu/gorm"

type NotePost struct {
	gorm.Model
	ThreadID int `gorm:"TYPE:integer REFERENCES threads"`
	Thread   Thread
	Image    *string
}
