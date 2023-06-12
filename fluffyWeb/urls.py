from django.urls import path, include

from django.contrib.auth.decorators import login_required
from django.views.generic import TemplateView

from fluffyWeb import views


urlpatterns = [

    # path('', login_required(index_view), name='index'),
    path('home/', views.HomeView, name='home'),
    path('login/', views.LogInView, name='login'),
    path('order/FullOrder', views.FullOrderView, name='fullorder'),
    path('order/SemiOrder', views.SemiOrderView, name='semiorder'),
    
    path('', include("django.contrib.auth.urls")),
    path('signin/', views.SignInView.as_view(), name="signin"),
]