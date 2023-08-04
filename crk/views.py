from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
# from .serializers import NoteSerializer
# from .models import Notes

from cookie.serializers import CookieSerializer
from cookie.models import Cookie

from django.views.decorators.csrf import ensure_csrf_cookie


def index(request):
    return render(request, 'index.html')


# Create your views here.


# Create your views here.
class CookieView(viewsets.ModelViewSet):
    serializer_class = CookieSerializer
    queryset = Cookie.objects.all()


# Create your views here.

def front(request):
    context = {
    }

    return render(request, "index.html", context)


@api_view(['GET', 'POST'])
@ensure_csrf_cookie
def cookie_get_post(request):

    if request.method == 'GET':
        cookie = Cookie.objects.all()
        serializer = CookieSerializer(cookie, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CookieSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def cookie_detail(request, pk):
    try:
        note = Cookie.objects.get(pk=pk)
    except Cookie.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'DELETE':
        note.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
