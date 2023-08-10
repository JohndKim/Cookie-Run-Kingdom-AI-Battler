"""
URL configuration for crk project.

The `urlpatterns` list routes URLs to  For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from . import views
# from . import views

router = routers.DefaultRouter()
router.register(r'cookies', views.CookieView, 'cookie')

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", views.index, name=""),
    path("battle/", views.index, name="battle"),
    path("cookies/", views.index, name="cookies"),
    path("about/", views.index, name="about"),
    path("home/", views.index, name="home"),
    path("api/", include(router.urls )),
    path("cookies_db/", views.cookie_get_post, name="cookie_get_post"),
    path("cookies_db/<int:pk>/", views.cookie_detail, name="detail"),
    path("battle_system/", views.runGame, name="battle_system")
]


# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path("", front, name="front"),
#     path("notes/", note, name="note"),
#     path("notes/<int:pk>/", note_detail, name="detail"),
# ]
