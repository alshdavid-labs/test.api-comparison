package services

import (
	"time"

	"models"
)

var postsDb = []models.Post{}

func Add(content string) (models.Post) {
	var newPost = models.Post{
		Date: time.Now(), 
		Content: content,
	}

	postsDb = append(postsDb, newPost)
	return newPost
}

func Get() ([]models.Post) {
	return postsDb
}