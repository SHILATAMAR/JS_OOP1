function Animal(name) { this.name = name }
Animal.prototype.makeSound = function () { console.log("The name is: ", this.name); }

function Dog(name) {
    Animal.call(this, name)
}

Object.setPrototypeOf(Dog.prototype, Animal.prototype);
Dog.prototype.bark = function () {
    console.log(this.name + " barks");
};

const rocky = new Dog("Rocky");
rocky.makeSound(); 
rocky.bark();  