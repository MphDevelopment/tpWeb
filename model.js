
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing(){
    this.shapes = [];

    this.getForms = function() {
        return this.shapes;
    }.bind(this);

    this.addShape = function(shape) {
        this.shapes.push(shape);
    }.bind(this);
}

function Shape(color, thickness){
    this.color = color;
    this.thickness = thickness;

}

function Rectangle(startx, starty, length, width, thickness, color){

    Shape.call(this, color, thickness);
    this.startx = startx;
    this.starty = starty;
    this.length = length;
    this.width = width;
    

}
Rectangle.prototype = new Shape();

function Line(startx, starty, endx, endy, thickness, color){
    Shape.call(this, color, thickness);
    this.startx = startx;
    this.starty = starty;

    this.endx = endx;
    this.endy = endy;

}
Line.prototype = new Shape();

