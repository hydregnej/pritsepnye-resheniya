from django.urls import path
from .views import KatalogListView, OrderCreateView, NewsCreateView

urlpatterns = [
    path('katalog/', KatalogListView.as_view(), name='katalog-list'),
    path('news/', NewsCreateView.as_view(), name='create-news'),
    path('order/', OrderCreateView.as_view(), name='create-order'),
]