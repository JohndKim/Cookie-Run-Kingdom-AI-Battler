from django.shortcuts import render
from django.shortcuts import render
from django.shortcuts import render
from rest_framework import viewsets
from cookie.serializers import CookieSerializer
from cookie.models import Cookie


def index(request):
    return render(request, 'index.html')


# Create your views here.


# Create your views here.

class CookieView(viewsets.ModelViewSet):
    serializer_class = CookieSerializer
    queryset = Cookie.objects.all()
