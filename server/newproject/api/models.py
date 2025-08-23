from django.db import models

# Create your models here.

# SECURITY WARNING: keep the secret key used in production secret!

class Book(models.Model):
    title = models.CharField(max_length=200)
    release_year = models.IntegerField()

def __str__(self):
    return self.title