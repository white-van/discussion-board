package model

import "github.com/jinzhu/gorm"

type VoteType int8

const ( // iota is reset to 0
	Upvote   PostType = iota // c0 == 0
	Downvote                 // c1 == 1
)

type Vote struct {
	gorm.Model
	ThreadID int `gorm:"TYPE:integer REFERENCES threads"`
	Thread   Thread
	UserID   int `gorm:"TYPE:integer REFERENCES users"`
	User     User
	Vote     VoteType
}
