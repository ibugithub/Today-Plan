from django.contrib import admin
from .models import todoPlan
# Register your models here.

@admin.register(todoPlan)
class todoPlanAdmin(admin.ModelAdmin):
    list_display = ['id', 'plan']