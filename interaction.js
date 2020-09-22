
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'

  this.initialX = 0;
  this.initialY = 0;
  
  this.finalX = 0;
  this.finalY = 0;

  this.mousePressed = false;

	// Developper les 3 fonctions gérant les événements
  DnD.prototype.onMouseUp = evt => {
    if(this.mousePressed){
      res = getMousePosition(canvas, evt);
      this.finalX = res.x;
      this.finalY = res.y;
      this.mousePressed = false;
      console.log(this.initialX + " " + this.initialY + " " +  this.finalX + " " + this.finalY);
      interactor.onInteractionEnd(this);
    } 
  }
  
  DnD.prototype.onMouseDown = evt => {
    res = getMousePosition(canvas, evt);

    this.initialX = res.x;
    this.initialY = res.y;

    this.mousePressed = true;

    console.log(this.initialX + " " + this.initialY + " " +  this.finalX + " " + this.finalY)

    interactor.onInteractionStart(this);
  }
  
  DnD.prototype.onMouseMove = evt => {
    if(this.mousePressed){
      res = getMousePosition(canvas, evt);
      this.finalX = res.x;
      this.finalY = res.y;
      console.log(this.initialX + " " + this.initialY + " " +  this.finalX + " " + this.finalY)

      interactor.onInteractionUpdate(this);
    }
  }
  

  // Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.onMouseDown, false);
  canvas.addEventListener('mousemove', this.onMouseMove, false);
  canvas.addEventListener('mouseup', this.onMouseUp, false);

};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



