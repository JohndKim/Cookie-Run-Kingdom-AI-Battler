# Generated by Django 4.2.3 on 2023-08-01 06:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("cookie", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="cookie",
            name="ability",
        ),
        migrations.RemoveField(
            model_name="cookie",
            name="stats",
        ),
        migrations.AddField(
            model_name="cookie",
            name="attack",
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name="cookie",
            name="defense",
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name="cookie",
            name="description",
            field=models.CharField(default="", max_length=200),
        ),
        migrations.AddField(
            model_name="cookie",
            name="health",
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name="cookie",
            name="rarity",
            field=models.CharField(max_length=50),
        ),
    ]
