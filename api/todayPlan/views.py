from django.shortcuts import render
from .serializers import todoPlanSerializer 
from .models import todoPlan
from rest_framework.generics import ListAPIView, CreateAPIView, DestroyAPIView
# Create your views here.
 
class todoList(ListAPIView):
    queryset = todoPlan.objects.all()
    serializer_class = todoPlanSerializer 
class todoCreate(CreateAPIView):
    queryset = todoPlan.objects.all()
    serializer_class = todoPlanSerializer 
class todoDelete(DestroyAPIView):
    queryset = todoPlan.objects.all()
    serializer_class = todoPlanSerializer  
    lookup_field = 'id'
