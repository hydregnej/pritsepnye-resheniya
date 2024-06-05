from rest_framework import serializers
from .models import Katalog, Order, Sub, News

class KatalogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Katalog
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    katalog = KatalogSerializer(read_only=True, source='pricep')

    class Meta:
        model = Order
        fields = '__all__'

    def create(self, validated_data):
        pricep_id = self.initial_data.get('pricep')
        pricep = Katalog.objects.get(id=pricep_id)
        validated_data.pop('pricep', None)
        order = Order.objects.create(pricep=pricep, **validated_data)
        return order

class SubSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sub
        fields = '__all__'

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'