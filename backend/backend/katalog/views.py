from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Katalog
from .serializer import KatalogSerializer, NewsSerializer, OrderSerializer


@api_view(['GET'])
def katalog_list(request):
    if request.method == 'GET':
        katalogs = Katalog.objects.all()
        serializer = KatalogSerializer(katalogs, many=True)
        return Response(serializer.data)


@api_view(['POST'])
def create_news(request):
    if request.method == 'POST':
        serializer = NewsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def create_order(request):
    if request.method == 'POST':
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            order_instance = serializer.instance
            serializer_with_katalog = OrderSerializer(order_instance)
            return Response(serializer_with_katalog.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)