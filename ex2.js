function Rectangle(width, height) { this.width = width; this.height = height }
Rectangle.prototype.area = function () {
    return this.width * this.height
}
const myRectangle = new Rectangle(5, 3)
console.log(myRectangle.area());

