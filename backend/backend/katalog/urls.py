from django.urls import path
from . import views

urlpatterns = [
    path('katalog/', views.katalog_list, name='katalog-list'),
    path('create-news/', views.create_news, name='create-news'),
    path('create-order/', views.create_order, name='create-order'),
]