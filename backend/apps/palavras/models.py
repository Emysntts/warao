from django.db import models

# Create your models here.

class Palavra(models.Model):
    palavraWarao = models.CharField(max_length=255)
    palavraPortugues = models.CharField(max_length=255, unique=True)
    categoria = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.palavraWarao + ":" + self.palavraPortugues + " (" + self.categoria + ")"