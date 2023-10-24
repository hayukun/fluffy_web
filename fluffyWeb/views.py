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

def NotesView(request):
    return render(request, 'notes.html')

def FullOrderView(request):
    form = FullOrderForm()

    # DBから表示したい場合は、下記(フィルターしてね)
    # product = FullOrder.objects.all()
    # viewform = FullOrderViewForm()
    # あとはrenderに追加してHTMLに反映
    return render(request, 'fullorder.html', {'fullorder':form})

def SemiOrderView(request):
    return render(request, 'semiorder.html')

def recieveOrder(request):
    fullorder_flag = request.GET["fullorder_flag"]
    if (fullorder_flag == '1'):
        is_fullorder = True
    else:
        is_fullorder = False
    
    username = request.GET["username"]
    email = request.GET["email"]

    # username, emailからuser情報をDB検索

    

    return render(request, 'order_request_done.html')
