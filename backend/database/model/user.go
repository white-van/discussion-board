package model

import "github.com/jinzhu/gorm"

// User represents the schema for the users table in postgres
type User struct {
	gorm.Model
	FirstName string
	LastName  string
	Email     string
}
