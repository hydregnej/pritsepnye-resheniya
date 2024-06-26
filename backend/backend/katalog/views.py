from rest_framework import generics, status
from rest_framework.response import Response
from .models import Katalog, Order, Sub, News
from .serializer import KatalogSerializer, OrderSerializer, SubSerializer, NewsSerializer



class KatalogListView(generics.ListAPIView):
    queryset = Katalog.objects.all()
    serializer_class = KatalogSerializer

class OrderCreateView(generics.CreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        order = serializer.save()
        #katalog_data = KatalogSerializer(order.pricep).data
        response_data = serializer.data
        #response_data['pricep'] = katalog_data
        return Response(response_data, status=status.HTTP_201_CREATED)

class SubCreateView(generics.CreateAPIView):
    queryset = Sub.objects.all()
    serializer_class = SubSerializer

class NewsListView(generics.ListAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
