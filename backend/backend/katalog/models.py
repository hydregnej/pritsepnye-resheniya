from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail
from django.conf import settings

class Katalog(models.Model):
    title = models.CharField("Название", blank=False)
    content = models.CharField("Описание", blank=False)
    max_weight = models.CharField("Вес перевозимого груза", default=0, blank=False) #Максимальный вес груза (кг)
    self_weight = models.CharField("Собственный вес", default=0, blank=False) #Собственный вес (кг)
    platform_size = models.CharField("Длина рабочей платформы", default=0, blank=False) #Габариты платформы (мм)
    axle_weight = models.CharField("Нагрузка на оси", default=0, blank=False) #Нагрузка на ось (кг)
    availability = models.BooleanField("Наличие", default=False)
    price = models.CharField("Цена", default=0, blank=False)
    main_image = models.ImageField("Изображение в каталоге", upload_to='images/katalog/')
    image1 = models.ImageField("Изображение1", upload_to='images/katalog/')
    image2 = models.ImageField("Изображение2", upload_to='images/katalog/')
    image3 = models.ImageField("Изображение3", upload_to='images/katalog/')
    image4 = models.ImageField("Изображение4", upload_to='images/katalog/')
    image5 = models.ImageField("Изображение5", upload_to='images/katalog/')
    image6 = models.ImageField("Изображение6", upload_to='images/katalog/')
    pdfs = models.FileField("Пдф", upload_to='pdfs/')

class Order(models.Model):
    name = models.CharField("Имя", blank=False)
    phone = models.CharField("Номер", blank=False)
    email = models.EmailField("Почта", blank=False)
    pricep = models.ForeignKey("Прицеп", Katalog, on_delete=models.DO_NOTHING)

class Sub(models.Model):
    name = models.CharField("Имя", blank=False)
    email = models.EmailField("Почта", blank=False)

class News(models.Model):
    title = models.CharField("Заголовок")
    short_content = models.CharField("Краткое описание")
    content = models.CharField("Описание")
    image_news = models.ImageField("Изображение", upload_to='images/news/')
    created_date = models.DateField("Дата создания", auto_now_add=True)

@receiver(post_save, sender=News)
def send_email_to_subscribers(sender, instance, created, **kwargs):
    if created:
        subject = instance.title
        message = instance.content
        subscribers = Sub.objects.all()
        recipient_list = [subscriber.email for subscriber in subscribers]
        send_mail(subject, message, settings.EMAIL_HOST_USER, recipient_list, fail_silently=False)