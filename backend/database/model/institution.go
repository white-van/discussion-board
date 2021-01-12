package model

import "github.com/jinzhu/gorm"

type Institution struct {
	gorm.Model
	Name     string
	Location string
}
