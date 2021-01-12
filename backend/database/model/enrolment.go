package model

import "github.com/jinzhu/gorm"

type Position int8

const ( // iota is reset to 0
	Instructor        Position = iota // c0 == 0
	TeachingAssistant                 // c1 == 1
	Student                           // c2 == 2
)

type Enrolment struct {
	gorm.Model
	Position             Position
	QuestionContribution int
	AnswerContribution   int
	CourseID             int `gorm:"TYPE:integer REFERENCES courses"`
	Course               Course
	UserID               int `gorm:"TYPE:integer REFERENCES users"`
	User                 User
}
