from rest_framework import serializers
from .models import Cookie


class CookieSerializer(serializers.ModelSerializer):
    class Meta:  # model to work with cookie and fields for the json format specified
        model = Cookie
        fields = (('name', 'rarity', 'attack',
                   'defense', 'health', 'description'))
