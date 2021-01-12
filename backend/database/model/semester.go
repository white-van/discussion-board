package model

import "github.com/jinzhu/gorm"

// Semester represents the schema for the semesters table in postgres
type Semester struct {
	gorm.Model
	InstitutionID int `gorm:"TYPE:integer REFERENCES institutions"`
	Institution   Institution
	Name          string
}
