package model

import "github.com/jinzhu/gorm"

// Course represents the schema for the courses table in postgres
type Course struct {
	gorm.Model
	Name       string
	Code       string
	SemesterID int `gorm:"TYPE:integer REFERENCES semesters"`
	Semester   Semester
}
