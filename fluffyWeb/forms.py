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
        fields = ("username", "email", "password1", "password2")

    def save(self, commit=True):

        user = super().save(commit=False)
        user.email = self.cleaned_data["email"]
        user.save()
        return user

class FullOrderForm(forms.Form):
    content_quill = QuillFormField()

# class FullOrderViewForm(forms.ModelForm):
#     class Meta:
#         model = FullOrder
#         fields = ('aaa', 'bbb',)