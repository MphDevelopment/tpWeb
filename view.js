

Shape.prototype.paint = function(ctx){
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.thickness;
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
}
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function(ctx) {
    //TODO Manager color
    Shape.prototype.paint.call(this, ctx)
    
    ctx.rect(this.startx, this.starty, this.startx+this.length, this.starty + this.width);
    ctx.stroke();
  };
  
  Line.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.beginPath();
    ctx.moveTo(this.startx, this.starty);
    ctx.lineTo(this.endx, this.endy);
    ctx.stroke();
  };
  
  Drawing.prototype.paint = function(ctx) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function (eltDuTableau) {
      // now fill the canvas
      eltDuTableau.paint(ctx);
    });
  };
  