function Book(title, author) { this.title = title; this.author = author }
Book.prototype.info = function () {
    console.log(this.title + " by " + this.author);
}
const myBook = new Book("king","j.k");
myBook.info()