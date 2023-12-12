from django.urls import path
from. import views
urlpatterns=[
    path('',views.carused,name='carused'),
    ]