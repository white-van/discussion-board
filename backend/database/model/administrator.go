package model

type Administrator struct {
	// UserID        int         `gorm:"primary_key;auto_increment:false"`
	// User          User        `gorm:"foreignkey:UserID;"`
	UserID        uint `gorm:"TYPE:integer REFERENCES users"`
	User          User
	InstitutionID uint `gorm:"TYPE:integer REFERENCES institutions"`
	Institution   Institution
	// InstitutionID int         `gorm:"primary_key;auto_increment:false"`
	// Institution   Institution `gorm:"foreignkey:id;association_foreignkey:institution_id"`
}
