from django.db import models

class Katalog(models.Model):
    title = models.CharField(blank=False)
    content = models.CharField(blank=False)
    max_weight = models.CharField(blank=False) #Максимальный вес груза (кг)
    self_weight = models.CharField(blank=False) #Собственный вес (кг)
    platform_size = models.CharField(blank=False) #Габариты платформы (мм)
    axle_weight = models.CharField(blank=False) #Нагрузка на ось (кг)
    availability = models.BooleanField(default=False)

class Order(models.Model):
    name = models.CharField(blank=False)
    phone = models.CharField(blank=False)
    email = models.EmailField(blank=False)
    pricep = models.ForeignKey(Katalog, on_delete=models.DO_NOTHING)

class News(models.Model):
    name = models.CharField(blank=False)
    email = models.EmailField(blank=False)