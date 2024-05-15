from django.db import models

# Create your models here.

class Todo(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(null=True,
                                  blank=True)
    completed = models.BooleanField(default=False)
    hour = models.TimeField(null=True, 
                            blank=True)
    date = models.DateField(null=True,
                            blank=True)
    created = models.DateField(auto_now_add=True)
    updated = models.DateField(auto_now=True)

    def __str__(self):
        return self.title
