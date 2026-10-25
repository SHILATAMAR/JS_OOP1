function Phone(brand, model) {
    this.brand = brand; this.model = model
    Phone.prototype.details = function () {
        console.log("Phone: ", this.brand, this.model);
    }
}
const myPhon=new Phone("Samsung","s22")
myPhon.details()