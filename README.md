# TP1 WEB - GLI

### Architecture du projet
Ce projet est une application Web permettant de dessiner des rectangles, des lignes, ainsi que définir leur couleur et leur épaisseur de trait.<br>
Il contient un fichier *canvas.html* définissant la page web à afficher, ainsi que cinq fichier javascript :
- model.js qui définie les différents éléments du modele : Drawing, Rectangle, Line
- view.js qui est la représentation du modèle à l'utilisateur
- controller.js qui permet de modifier les éléments du model tout en mettant à jour la vue
- interraction.js qui permet de détecter l'interraction 'drag and drop' 
- main.js qui instancie tous les éléments nécessaire au bon fonctionnement de l'application

### Execution de l'application
Pour exécuter et tester l'application vous pouvez : 
- ouvrir ce projet dans un éditeur de code comme Visual Studio Code, qui permet de tester le projet en ouvrant un navigateur web
- ouvrir la page canvas.html dans votre navigateur, par exemple en naviguant à l'adresse `/path/to/tpWeb/canvas.html`.
