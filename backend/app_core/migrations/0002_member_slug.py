# Generated by Django 3.1.2 on 2020-10-26 19:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_core', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='member',
            name='slug',
            field=models.SlugField(default=2, verbose_name='Atalho'),
            preserve_default=False,
        ),
    ]