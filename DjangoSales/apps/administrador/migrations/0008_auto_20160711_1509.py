# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-07-11 20:09
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('administrador', '0007_entradas_fecha'),
    ]

    operations = [
        migrations.AlterField(
            model_name='entradas',
            name='categoria',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='administrador.CatalogoCategoria'),
        ),
    ]