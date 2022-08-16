from django.urls import path 
from . import views

urlpatterns = [ 
    path('list/', views.todoList.as_view()),
    path('create/', views.todoCreate.as_view()),
    path('delete/<int:id>/', views.todoDelete.as_view())
]