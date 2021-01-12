package model

import "github.com/jinzhu/gorm"

type Course struct {
	gorm.Model
	Name       string
	Code       string
	SemesterID int `gorm:"TYPE:integer REFERENCES semesters"`
	Semester   Semester
}
