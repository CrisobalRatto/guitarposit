from django.urls import path
from .views import HighscoreListCreate, HighscoreDetail

urlpatterns = [
    path('highscores/', HighscoreListCreate.as_view(), name='highscore-list-create'),
    path('highscores/<int:pk>/', HighscoreDetail.as_view(), name='highscore-detail')
]