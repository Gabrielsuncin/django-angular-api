from django.contrib import admin
from django.urls import path, include
from app_core import urls as app_core_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(app_core_urls))
]
