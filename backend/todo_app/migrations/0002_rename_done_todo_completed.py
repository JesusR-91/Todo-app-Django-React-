# Generated by Django 4.1.1 on 2024-05-08 09:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todo_app', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='todo',
            old_name='done',
            new_name='completed',
        ),
    ]