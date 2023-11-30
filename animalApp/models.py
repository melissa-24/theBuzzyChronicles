from django.db import models
from django.db.models.signals import post_save
from django.db.models.deletion import CASCADE

class Species(models.Model):
    species = models.CharField(max_length=255)

class AnimalName(models.Model):
    firstName = models.CharField(max_length=255)
    middleName = models.CharField(max_length=255, blank=True, null=True)

class Location(models.Model):
    location = models.CharField(max_length=255)


