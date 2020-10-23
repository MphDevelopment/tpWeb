
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);
	document.getElementById("butRect").onclick = () => this.currEditingMode = editingMode.rect;

	document.getElementById("butLine").onclick = () => this.currEditingMode = editingMode.line;

	document.getElementById("colour").onchange = () => this.currColour = document.getElementById("colour").value;

	document.getElementById("spinnerWidth").onchange = () => this.currLineWidth = document.getElementById("spinnerWidth").value


	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	Pencil.prototype.onInteractionStart = function(interraction) {
		switch (this.currEditingMode){
			case 0:
				this.currentShape = new Rectangle(interraction.initialX, interraction.initialY,
					1, 1, this.currLineWidth, this.currColour);
				break;
			case 1:
				this.currentShape = new Line(interraction.initialX, interraction.initialY,
					interraction.initialX, interraction.initialy, this.currLineWidth, 
					this.currColour);
				break;
		}
		this.currentShape.paint(ctx);
	}

	Pencil.prototype.onInteractionUpdate = function(interraction){
		drawing.paint(ctx);
 		switch (this.currEditingMode){
			case 0:
				this.currentShape.length = interraction.finalX - this.currentShape.startx;
				this.currentShape.width = interraction.finalY - this.currentShape.starty;
				break;
			case 1:
				this.currentShape.endx = interraction.finalX;
				this.currentShape.endy = interraction.finalY;
				break;
		}

		this.currentShape.paint(ctx);
	};

	Pencil.prototype.onInteractionEnd = function (interraction){
		drawing.addShape(this.currentShape);
		drawing.paint(ctx);

	};

};


