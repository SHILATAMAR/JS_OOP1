function Shape() { }
Shape.prototype.area = function () { return 0 }

function Circle(radius) { this.radius = radius }
Object.setPrototypeOf(Circle.prototype, Shape.prototype);
Circle.prototype.area = function () { return Math.PI * (this.radius ** 2) }

function Square(side) { this.side = side }
Object.setPrototypeOf(Square.prototype, Shape.prototype);
Square.prototype.area = function () { return this.side ** 2 }

const myCircle = new Circle(5);
console.log( myCircle.area());

const mySquare = new Square(3);
console.log( mySquare.area());


