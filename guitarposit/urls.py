from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import views as auth_views

from highscores.views import register_view




urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('highscores.urls')),  # Including the URLs of the highscores app.
    path('login/', auth_views.LoginView.as_view(), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('register/', register_view, name='register'),  # We'll define this shortly
]