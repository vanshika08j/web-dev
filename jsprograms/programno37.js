const book = {
    name: "The jungle book",
    author: "Rudyard kipling",
    price: "345",
    genre: "Fantasy ",
    read: function() {
        console.log("HAVE A READ!");
    },
    parts: {
        part1: "the hunt",
        part2: "climax"
    }
};
console.log(typeof book);
console.log(book.name);
console.log(book.price);
console.log(book.parts.part2);
console.log(book.read);






//
const bk = new Object({
    name: "The jungle book",
    author: "Rudyard kipling",
    price: "345",
    genre: "Fantasy ",
    read: function() {
        console.log("HAVE A READ!");
    },
    parts: {
        part1: "the hunt",
        part2: "climax"
    }
});
console.log(typeof bk);
console.log(bk.name);
console.log(bk.price);
console.log(bk.parts.part2);
console.log(bk.read);

function boook() {
    this.name = "The jungle book",
        this.author = "Rudyard kipling",
        this.price = "345",
        this.genre = "Fantasy ",
        this.read = function() {
            console.log("HAVE A READ!");
        },
        this.parts = {
            part1: "the hunt",
            part2: "climax"
        }
};
const bookk = new boook();
console.log(typeof bookk);
console.log(bookk.name);
console.log(bookk.price);
console.log(bookk.parts.part2);
console.log(bookk.read);