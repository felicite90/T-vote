# Prérequis
Avant de commencer, assurez-vous d'avoir les outils suivants installés sur votre machine :

Node.js (dernière version recommandée)
Python 3.x
Mise à jour de Node.js
Vérifiez la version actuelle de Node.js avec la commande suivante :

bash

node -v
La version recommandée est v22.7.0. Si vous devez mettre à jour Node.js, suivez les instructions spécifiques à votre système d'exploitation.

# Installation de Yarn
Installez Yarn globalement en utilisant npm :

bash

sudo npm install --global yarn
Structure du Projet
Créez les dossiers pour le backend et le frontend :

bash

mkdir backend frontend
Configuration du Frontend
Déplacez-vous dans le dossier frontend :

bash
cd frontend
Créez une nouvelle application React avec Vite :

bash
yarn create vite app
Choisissez les options suivantes :

Framework : React
Langage : JavaScript
Déplacez-vous dans le dossier app et installez les dépendances :

bash
cd app
yarn
Lancez le projet :

bash
yarn dev
Par défaut, le serveur se lance sur http://localhost:5173/.


Ajoutez un formulaire et un bouton de soumission dans votre application React. Ensuite, passez à la configuration du backend.

Configuration du Backend
Déplacez-vous dans le dossier backend :

bash
cd ../backend
Créez un environnement virtuel pour Python :

bash
python3 -m venv env
Activez l'environnement virtuel :

bash
env\Scripts\activate
Installez Django et Django REST Framework :

bash
pip install django djangorestframework
Créez un projet Django nommé project :

bash
django-admin startproject project
Déplacez-vous dans le dossier project :

bash
cd project
Créez une application Django pour votre API, nommons-la api :

bash
python manage.py startapp api
Ajoutez api et rest_framework à la liste INSTALLED_APPS dans le fichier project/settings.py :

python
INSTALLED_APPS = [
    ...
    'rest_framework',
    'api',
    ...
]
Créez un modèle pour votre entité dans api/models.py (par exemple, TypeElection) :

python
from django.db import models

class TypeElection(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
Mettez à jour la base de données (nous utilisons SQLite3 par défaut) :

bash

 python manage.py makemigrations
 python manage.py migrate
Créez un fichier api/serializers.py et définissez un sérialiseur pour chaque entité :

python

 from rest_framework import serializers
 from .models import TypeElection

class TypeElectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeElection
        fields = '__all__'
Définissez les vues dans api/views.py :

python
 from rest_framework import viewsets
 from .models import TypeElection
 from .serializers import TypeElectionSerializer

class TypeElectionViewSet(viewsets.ModelViewSet):
    queryset = TypeElection.objects.all()
    serializer_class = TypeElectionSerializer
Créez un fichier api/urls.py pour les routes de l'application api :

python

 from django.urls import path, include
 from rest_framework.routers import DefaultRouter
 from .views import TypeElectionViewSet

 router = DefaultRouter()
 router.register(r'type-elections', TypeElectionViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
Incluez les routes de l'application api dans le fichier project/urls.py :

python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
]
Lancez le serveur Django pour tester :

bash
python manage.py runserver

Ajoutez une méthode dans views.py pour l'ajout d'un type d'élection si nécessaire et mettez à jour les routes dans api/urls.py.