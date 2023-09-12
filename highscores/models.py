from django.contrib.auth.models import User
from django.db import models

class Highscore(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    song_name = models.CharField(max_length=200)
    youtube_link = models.URLField(blank=True, null=True)
    description = models.TextField()

    def __str__(self):
        return self.title