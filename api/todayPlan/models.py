from django.db import models

# Create your models here.
class todoPlan(models.Model):
    plan = models.CharField(max_length = 1000)