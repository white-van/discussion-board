package model

import "github.com/jinzhu/gorm"

type Semester struct {
	gorm.Model
	InstitutionID int `gorm:"TYPE:integer REFERENCES institutions"`
	Institution   Institution
	Name          string
}
