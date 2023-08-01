from rest_framework import serializers
from .models import Cookie


class CookieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cookie
        fields = (('name', 'rarity', 'attack',
                   'defense', 'health', 'description'))
