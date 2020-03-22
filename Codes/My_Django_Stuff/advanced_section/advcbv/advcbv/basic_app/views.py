from django.shortcuts import render
from django.views.generic import View,TemplateView,ListView,DetailView,CreateView,UpdateView,DeleteView
from django.http import HttpResponse
from django.urls import reverse_lazy
from . import models
# Create your views here.
'''
class CBView(View):
    def get(self, request):
        return HttpResponse("Class based view is cool!")
'''

class IndexView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self,**kwargs):
        context = super().get_context_data(**kwargs)
        context['injectme'] = 'I am injected!'

        return context

class SchoolListView(ListView):
    context_objects_name = 'school_list'
    model = models.School

class SchoolDetailView(DetailView):
    context_object_name = 'school_details'
    model = models.School
    template_name = 'basic_app/school_detail.html'

class SchoolCreateView(CreateView):
    fields = ("name","principal","location")
    model = models.School

class SchoolUpdateView(UpdateView):
    fields = ("name","principal")
    model = models.School
