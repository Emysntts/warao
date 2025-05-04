from django.db import models

# Create your models here.

class Usuario(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=255, unique=True)
    nivel = models.IntegerField(default=0)

    def __str__(self):
        return f"Nome: {self.nome} (Nivel: {self.nivel})"