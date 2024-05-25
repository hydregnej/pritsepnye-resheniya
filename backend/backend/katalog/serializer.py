from rest_framework import serializers
from .models import Katalog, Order, News

class KatalogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Katalog
        fields = '__all__'

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    pricep = KatalogSerializer()

    class Meta:
        model = Order
        fields = '__all__'