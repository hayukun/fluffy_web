from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    """ユーザーモデル"""
    email = models.EmailField('メールアドレス', unique=True)
