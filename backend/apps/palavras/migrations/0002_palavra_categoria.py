# Generated by Django 5.2 on 2025-05-04 11:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('palavras', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='palavra',
            name='categoria',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
