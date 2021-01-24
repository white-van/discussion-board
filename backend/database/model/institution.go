package model

import "github.com/jinzhu/gorm"

// Institution represents the schema for the institutions table in postgres
type Institution struct {
	gorm.Model
	Name     string
	Location string
}
