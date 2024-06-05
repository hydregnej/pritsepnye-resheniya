from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail
from django.conf import settings

class Katalog(models.Model):
    title = models.CharField(blank=False)
    content = models.CharField(blank=False)
    max_weight = models.CharField(blank=False) #Максимальный вес груза (кг)
    self_weight = models.CharField(blank=False) #Собственный вес (кг)
    platform_size = models.CharField(blank=False) #Габариты платформы (мм)
    axle_weight = models.CharField(blank=False) #Нагрузка на ось (кг)
    availability = models.BooleanField(default=False)
    image = models.ImageField(upload_to='images/katalog/')

class Order(models.Model):
    name = models.CharField(blank=False)
    phone = models.CharField(blank=False)
    email = models.EmailField(blank=False)
    pricep = models.ForeignKey(Katalog, on_delete=models.DO_NOTHING)

class Sub(models.Model):
    name = models.CharField(blank=False)
    email = models.EmailField(blank=False)

class News(models.Model):
    title = models.CharField()
    content = models.CharField()
    image_news = models.ImageField(upload_to='images/news/')

@receiver(post_save, sender=News)
def send_email_to_subscribers(sender, instance, created, **kwargs):
    if created:
        subject = instance.title
        message = instance.content
        subscribers = Sub.objects.all()  # Пожалуйста, замените Sub на вашу модель подписчиков
        recipient_list = [subscriber.email for subscriber in subscribers]
        send_mail(subject, message, settings.EMAIL_HOST_USER, recipient_list, fail_silently=False)