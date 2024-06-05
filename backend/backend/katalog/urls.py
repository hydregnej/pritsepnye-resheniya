from django.urls import path
from .views import KatalogListView, OrderCreateView, SubCreateView, NewsListView

urlpatterns = [
    path('katalog/', KatalogListView.as_view(), name='katalog-list'),
    path('sub/', SubCreateView.as_view(), name='create-sub'),
    path('order/', OrderCreateView.as_view(), name='create-order'),
    path('news/', NewsListView.as_view(), name='news-list')
]