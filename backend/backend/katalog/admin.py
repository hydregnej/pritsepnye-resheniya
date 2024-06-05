from django.contrib import admin
from .models import Katalog, Order, Sub, News

admin.site.register(Katalog)
admin.site.register(Order)
admin.site.register(Sub)
admin.site.register(News)