package models

import "time"

type Post struct {
	Date time.Time `json:"date"`
	Content string `json:"content"`
}
