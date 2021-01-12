package model

// Administrator represents the schema for the adminstrators table in postgres
type Administrator struct {
	UserID        uint `gorm:"TYPE:integer REFERENCES users"`
	User          User
	InstitutionID uint `gorm:"TYPE:integer REFERENCES institutions"`
	Institution   Institution
}
