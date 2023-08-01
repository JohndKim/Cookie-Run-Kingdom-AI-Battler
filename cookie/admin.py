from django.contrib import admin

# Register your models here.
from .models import Cookie, Stats, Ability, Rarity


class CookieAdmin(admin.ModelAdmin):
    # list_display = ('name', 'rarity', 'stats', 'ability')
    list_display = ('name', 'rarity', 'attack',
                    'defense', 'health', 'description')


# class StatsAdmin(admin.ModelAdmin):
#     list_display = ('attack', 'defense', 'health')


# Register your models here.

admin.site.register(Cookie, CookieAdmin)
# admin.site.register(Stats, StatsAdmin)
