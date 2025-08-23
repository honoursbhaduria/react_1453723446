from django.urls import path ,include 
from .views import create_book, get_books

urlpatterns = [
    path('books/', get_books, name='get_books'),
    path('books/create/', create_book, name='create_book')
]
