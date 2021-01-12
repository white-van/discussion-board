package model

import "github.com/jinzhu/gorm"

// PostType represents the different types of posts that can be made
type PostType int

const (
	// Question represents the default post, a user asking a question
	Question PostType = iota
	// Note represents a note post, this is not usually up for discussion, but does accept comments
	Note
	// Poll represents a poll, this has a specific interface for accepting votes from users
	Poll
)

// Thread represents the schema for the threads table in postgres
type Thread struct {
	gorm.Model
	CourseID    int `gorm:"TYPE:integer REFERENCES courses"`
	Course      Course
	AuthorID    int `gorm:"TYPE:integer REFERENCES users"`
	Author      User
	ParentID    *int `gorm:"TYPE:integer REFERENCES threads"`
	Parent      *Thread
	NumChildren int
	Title       string
	Body        *string
	Type        PostType
	Upvotes     int
	ViewCount   int
	IsLocked    bool
	IsAnon      bool
	Categories  []Category `gorm:"many2many:thread_categories;"`
}
