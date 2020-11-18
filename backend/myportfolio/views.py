from django.shortcuts import render
from django.http import Http404
# Create your views here.

def home(request, *args, **kwargs):
        return render(request, 'index.html')

def page_not_found_view(request, *args, **kwargs):
    return Http404("Not yet created :(")

def internal_server_error_view(request, *args, **kwargs):
    return Http404("Not yet created :(")