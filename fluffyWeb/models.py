from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    """ユーザーモデル"""
    email = models.EmailField('メールアドレス', unique=True)
    post_code = models.CharField('郵便番号', max_length=7)
    address_prefecture = models.CharField('都道府県', max_length=10)
    address_city = models.CharField('市町村', max_length=100)
    address_house_number = models.CharField('番地', max_length=100)
    address_house_name = models.CharField('マンション名', max_length=100 )
