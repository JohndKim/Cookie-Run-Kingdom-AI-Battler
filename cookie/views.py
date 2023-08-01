from django.shortcuts import render
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CookieSerializer
from .models import Cookie

# Create your views here.


# Create your views here.

class CookieView(viewsets.ModelViewSet):
    serializer_class = CookieSerializer
    queryset = Cookie.objects.all()
