function Vehicle(type) { this.type = type }
Vehicle.prototype.describe = function () { console.log("This is a: ", this.type); }

function Car(brand, type) { this.brand = brand; Vehicle.call(this, type) }
Object.setPrototypeOf(Car.prototype, Vehicle.prototype);

Car.prototype.info = function () { console.log("This is a: ", this.brand, this.type); }

const myCar = new Car("BMW", "hybrid");
myCar.describe();
myCar.info();  