# Prérequis
Avant de commencer, assurez-vous d'avoir les outils suivants installés sur votre machine :

   ## Node.js (dernière version recommandée)
   ## node -v
   ## Python 3.x
   ## v22.7.0.
   
# Installation de Yarn

    1. Installez Yarn globalement en utilisant npm :
       
           sudo npm install --global yarn
          
    3. Structure du Projet
    Créez les dossiers pour le backend et le frontend :
    
         mkdir backend frontend
       
    # I. Configuration du Frontend
        Déplacez-vous dans le dossier frontend :
        
            cd frontend
        
    5. Créez une nouvelle application React avec Vite :
       
            * yarn create vite app
            _ Choisissez les options suivantes :
            * Framework : React
            + Langage : JavaScript
    7. Déplacez-vous dans le dossier app et installez les dépendances :
       
            cd app
            yarn
       
    9. Lancez le projet :
        
         yarn dev
        Par défaut, le serveur se lance sur http://localhost:5173/.
   
# II. Configuration du Backend
    Déplacez-vous dans le dossier backend :
    
        cd ../backend
        
    1. Créez un environnement virtuel pour Python :
       
            python3 -m venv env
           
    3. Activez l'environnement virtuel :
       
             env\Scripts\activate
       
    5. Installez Django et Django REST Framework :
       
            pip install django djangorestframework
       
    7. Créez un projet Django nommé project :
       
             django-admin startproject project
       
    9. Déplacez-vous dans le dossier project :
        
        cd project
       
    11. Créez une application Django pour votre API, nommons-la api :
        
             python manage.py startapp api
        
    13. Ajoutez api et rest_framework à la liste INSTALLED_APPS dans le fichier project/settings.py
        
    15. Créez un modèle pour votre entité dans api/models.py
            
    10.Mettez à jour la base de données (nous utilisons SQLite3 par défaut) :
    
         1. python manage.py makemigrations
         2. python manage.py migrate
         
    16. Créez un fichier api/serializers.py et définissez un sérialiseur pour chaque entité
        
    18. Définissez les vues dans api/views.py et faite les importations
        
    20. Créez un fichier api/urls.py pour les routes de l'application api
        
    22. Dans urls.py incluez les routes de l'application api dans le fichier project/urls.py
        
    14. Lancez le serveur Django pour tester :
        
        python manage.py runserver
        
    16. Ajoutez une méthode dans views.py pour l'ajout d'un type d'élection si nécessaire et mettez à jour les routes dans api/urls.py.
