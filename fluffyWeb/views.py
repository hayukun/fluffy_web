from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic.edit import CreateView
from .forms import SignInForm

class SignInView(CreateView):
    form_class = SignInForm
    success_url = reverse_lazy('login')
    template_name = 'signin.html'


def LogInView(request):
    return render(request, 'home.html')

def HomeView(request):
    return render(request, 'home.html')