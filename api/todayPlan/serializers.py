from rest_framework import serializers 
from .models import todoPlan 

class todoPlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = todoPlan 
        fields = ['id', 'plan']