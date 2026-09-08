from django.urls import path
from project.views import root_view, health_view

urlpatterns = [
    path('', root_view, name='root'),
    path('api/health', health_view, name='health'),
]
