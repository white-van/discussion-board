package model

import "github.com/jinzhu/gorm"

// Position is an enum for the differnet positions a user can have in a course
type Position int8

const (
	// Instructor represents the admin for an individual course
	Instructor Position = iota
	// TeachingAssistant represents a TA for a given course
	TeachingAssistant
	// Student is the default for a course, and it is assigned to all students
	Student
)

// Enrolment represents the schema for the enrolments table in postgres
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
