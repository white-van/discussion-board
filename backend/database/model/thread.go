package model

import "github.com/jinzhu/gorm"

type PostType int

const ( // iota is reset to 0
	Question PostType = iota // c0 == 0
	Note                     // c1 == 1
	Poll                     // c2 == 2
)

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
