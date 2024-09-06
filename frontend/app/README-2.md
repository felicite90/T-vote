## Juste pour les commandes

## Il faut mettre à jour node vers la derniére version

## node -v
## v22.7.0

1. J'ai d'abord installé yarn
    sudo npm install --global yarn

2. Ensuite j'ai crée deux dossiers
    backend
    frontend

3. Le backend servira pour DjangoRestFrameWork et le frontend pour ReactJS

4. Je me suis deplacé dans le dossier frontend puis j'ai tapé la commande suivante

5. yarn create vite app

6. J'ai choisi React

7. J'ai choisi Javascript

8. Je me suis deplacé dans le dossier app se trouvant dans frontend et j'ai tapé la commande suivante

9. yarn

10. Cette commande va installer toutes les dependances de notre projet React

11. Pour lancer le projet on tape la commande suivante

12. yarn dev

13. Par defaut sous mac ca lance sur : http://localhost:5173/

14. On ajoute un formulaire et un bouton submit et on part dans le backend

15. cd backend

16. On cree un environnement virtuel

17. python3 -m venv venv

18. On active notre venv

19. source venv/bin/activate

20. On install django et djangorestframework

21. pip install django et djangorestframework

22. On cree un projet django qui s'appelle project par convention

23. django-admin startproject project

24. On se deplace dans le dossier project pour creer une application pour notre API

25. python manage.py startapp api

26. On ajoute notre application api dans settings dans INSTALLED_APPS, on n'oublie pas d'ajouter rest_framework aussi

27. On cree une classe dans models.py pour notre entité (ICI je vais faire pour TypeElection)

28. On met à jour la base de données (moi j'utilise sqlite3 mais toi tu vas utiliser postgres)

30. On cree un fichier pour nos serialisations (serializers.py) dans le dossier de notre application api/ et On y ajoute une classe pour chaque enitité, ici on ajoute pour ElectionType

31. On clee les vues dans le fichier views.py

32. On cree un fichier pour les routes de notre application api, urls.py et on y ajoute notre seule route en attendant

33. On doit maintenant inclure notre urls.py dans le urls.py du projet pour qu'il soit pris en charge

34. On lance le projet pour tester (on rappelle qu'on est toujours dans le dossier project)

35. python manage.py runserver

36. On ajoute une methode dans views pour l'ajout d'un type d'election

37. On ajoute une route dans api/urls.py pour notre derniere fonction

38. Le reste c'est dans la video ici : https://www.youtube.com/watch?v=xldTxXtNiuk 
