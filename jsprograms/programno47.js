const book = {
    name: "gulliver's travels",
    price: "399",
    genre: "fantasy"
}
const book2 = {
    second: "The jungle book",
    author: "Rudyard kipling",
}
let c = 0;
book.__proto___ = book2;
for (let key in book) {
    c++;
}
console.log(c);