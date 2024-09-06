# Prérequis
Avant de commencer, assurez-vous d'avoir les outils suivants installés sur votre machine :
    **Node.js** (dernière version recommandée)
    **Python 3.x**
1. Mise à jour de Node.js
    Vérifiez la version actuelle de Node.js avec la commande suivante :
    **node -v**
    La version recommandée est:
    **v22.7.0.** Si vous devez mettre à jour Node.js, suivez les instructions spécifiques à votre système d'exploitation.
# Installation de Yarn
2. Installez Yarn globalement en utilisant npm :
    sudo npm install --global yarn
3. Structure du Projet
Créez les dossiers pour le backend et le frontend :
    mkdir backend frontend
4. Configuration du Frontend
    Déplacez-vous dans le dossier frontend :
    cd frontend
5. Créez une nouvelle application React avec Vite :
    yarn create vite app
    Choisissez les options suivantes :
    Framework : React
    Langage : JavaScript
6. Déplacez-vous dans le dossier app et installez les dépendances :
    cd app
    yarn
7. Lancez le projet :
    yarn dev
    Par défaut, le serveur se lance sur http://localhost:5173/.
   
**I. Configuration du Backend**
Déplacez-vous dans le dossier backend :
    cd ../backend
1. Créez un environnement virtuel pour Python :
python3 -m venv env
2. Activez l'environnement virtuel :
    env\Scripts\activate
3. Installez Django et Django REST Framework :
    pip install django djangorestframework
4. Créez un projet Django nommé project :
    django-admin startproject project
5. Déplacez-vous dans le dossier project :
    cd project
7. Créez une application Django pour votre API, nommons-la api :
    python manage.py startapp api
8. Ajoutez api et rest_framework à la liste INSTALLED_APPS dans le fichier project/settings.py 
9. Créez un modèle pour votre entité dans api/models.py (par exemple, TypeElection) :
    from django.db import models
    class TypeElection(models.Model):
        name = models.CharField(max_length=100)
        description = models.TextField()
10.Mettez à jour la base de données (nous utilisons SQLite3 par défaut) :
     python manage.py makemigrations
     python manage.py migrate
11. Créez un fichier api/serializers.py et définissez un sérialiseur pour chaque entité :
     from rest_framework import serializers
     from .models import TypeElection
    
    class TypeElectionSerializer(serializers.ModelSerializer):
        class Meta:
            model = TypeElection
            fields = '__all__'
12. Définissez les vues dans api/views.py :
     from rest_framework import viewsets
     from .models import TypeElection
     from .serializers import TypeElectionSerializer
    
    class TypeElectionViewSet(viewsets.ModelViewSet):
        queryset = TypeElection.objects.all()
        serializer_class = TypeElectionSerializer
13. Créez un fichier api/urls.py pour les routes de l'application api :
     from django.urls import path, include
     from rest_framework.routers import DefaultRouter
     from .views import TypeElectionViewSet
    
     router = DefaultRouter()
     router.register(r'type-elections', TypeElectionViewSet)
    
    urlpatterns = [
        path('', include(router.urls)),
    ]
15. Dans urls.py incluez les routes de l'application api dans le fichier project/urls.py :
    from django.contrib import admin
    from django.urls import path, include
    urlpatterns = [
        path('admin/', admin.site.urls),
        path('api/', include('api.urls')),
    ]
14. Lancez le serveur Django pour tester :
    python manage.py runserver
16. Ajoutez une méthode dans views.py pour l'ajout d'un type d'élection si nécessaire et mettez à jour les routes dans api/urls.py.
