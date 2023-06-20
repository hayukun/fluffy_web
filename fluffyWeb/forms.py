from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import get_user_model
from django.urls import *
from django.conf import settings
from django.db import models
from django import forms
from django_quill.fields import QuillFormField

User = get_user_model()

class SignInForm(UserCreationForm):
    class Meta:
        model = User
        fields = ("username", "email", "post_code", "address_prefecture", "address_city", "address_house_number", "address_house_name","password1", "password2")

    def save(self, commit=True):

        user = super().save(commit=False)
        user.email = self.cleaned_data["email"]
        user.post_code = self.cleaned_data["post_code"]
        user.address_prefecture = self.cleaned_data["address_prefecture"]
        user.address_city = self.cleaned_data["address_city"]
        user.address_house_number = self.cleaned_data["address_house_number"]
        user.address_house_name = self.cleaned_data["address_house_name"]

        user.save()
        return user

class FullOrderForm(forms.Form):
    content_quill = QuillFormField()

# class FullOrderViewForm(forms.ModelForm):
#     class Meta:
#         model = FullOrder
#         fields = ('aaa', 'bbb',)