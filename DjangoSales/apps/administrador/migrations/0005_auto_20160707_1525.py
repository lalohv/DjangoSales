# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-07-07 20:25
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('administrador', '0004_auto_20160615_1525'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='inventario',
            name='is_active',
        ),
        migrations.RemoveField(
            model_name='inventario',
            name='precio_entrada',
        ),
        migrations.RemoveField(
            model_name='inventario',
            name='precio_salida',
        ),
        migrations.AddField(
            model_name='producto',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='producto',
            name='precio_entrada',
            field=models.FloatField(default=0),
        ),
        migrations.AddField(
            model_name='producto',
            name='precio_salida',
            field=models.FloatField(default=0),
        ),
    ]
