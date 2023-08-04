from django.db import models

# Create your models here.

# stats of each cookie (ATK, DEF, HP)
class Stats(models.Model):
    attack = models.IntegerField()
    defense = models.IntegerField()
    health = models.IntegerField()
    # crit_chance = models.FloatField()
    
# ability of each cookie (na for now)
class Ability(models.Model):
    ability = models.IntegerField()
    
# rarity of each cookie
class Rarity(models.Model):
    rarity = models.CharField(max_length=50)

# cookie object class
class Cookie(models.Model):
    # id = models.IntegerField()
    name = models.CharField(max_length=100)
    
    rarity = models.CharField(max_length=50)
    
    attack = models.IntegerField(default=0)
    defense = models.IntegerField(default=0)
    health = models.IntegerField(default=0)
    
    description = models.CharField(default='', max_length=200)
    
    
    # name = models.CharField(max_length=100)
    # rarity = models.ForeignKey(Rarity, on_delete=models.CASCADE)
    # stats = models.ForeignKey(Stats, on_delete=models.CASCADE)
    # ability = models.ForeignKey(Ability, on_delete=models.CASCADE)
    
    def __str__(self):
        return f"{self.name} ({self.rarity}, {self.attack}, {self.defense}, {self.health}, {self.description})"
        # return f"{self.name} ({self.rarity}, {self.stats}, {self.ability})"
    


    

    
    