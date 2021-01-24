package model

import "github.com/jinzhu/gorm"

// TODO, swap to boolean? is there ever more than 2 votes?

// VoteType is the enum for representing the types of votes on post
type VoteType int8

const (
	// Upvote represents an post up vote
	Upvote PostType = iota
	// Downvote represents an post down vote
	Downvote
)

// Vote represents the schema for the votes table in postgres
type Vote struct {
	gorm.Model
	ThreadID int `gorm:"TYPE:integer REFERENCES threads"`
	Thread   Thread
	UserID   int `gorm:"TYPE:integer REFERENCES users"`
	User     User
	Vote     VoteType
}
