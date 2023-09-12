from rest_framework import generics
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect
from .models import Highscore
from .serializers import HighscoreSerializer


def register_view(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')  # Redirect to the login page after registration
    else:
        form = UserCreationForm()
    return render(request, 'registration/register.html', {'form': form})

class HighscoreListCreate(generics.ListCreateAPIView):
    queryset = Highscore.objects.all()
    serializer_class = HighscoreSerializer

    def perform_create(self, serializer):
        # Assuming you have a user field in your Highscore model to keep track of who posted the score.
        # This line will automatically associate the logged-in user with the new highscore.
        serializer.save(user=self.request.user)

class HighscoreDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Highscore.objects.all()
    serializer_class = HighscoreSerializer

    