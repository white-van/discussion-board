package model

import "github.com/jinzhu/gorm"

// NotePost represents the schema for the note_posts table in postgres
type NotePost struct {
	gorm.Model
	ThreadID int `gorm:"TYPE:integer REFERENCES threads"`
	Thread   Thread
	Image    *string
}
