from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic.edit import CreateView
from .forms import SignInForm
from .forms import FullOrderForm #, FullOrderViewForm

class SignInView(CreateView):
    form_class = SignInForm
    success_url = reverse_lazy('login')
    template_name = 'signin.html'


def LogInView(request):
    return render(request, 'home.html')

def HomeView(request):
    return render(request, 'home.html')

def FullOrderView(request):
    form = FullOrderForm()

    # DBから表示したい場合は、下記(フィルターしてね)
    # product = FullOrder.objects.all()
    # viewform = FullOrderViewForm()
    # あとはrenderに追加してHTMLに反映
    return render(request, 'fullorder.html', {'fullorder':form})

def SemiOrderView(request):
    return render(request, 'semiorder.html')

