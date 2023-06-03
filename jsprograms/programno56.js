const book = {
    name: "gulliver's travels",
    price: "399",
    genre: "fantasy"
}
const str = String(book);
const nstr = String(book["price"]);
console.log(str);
console.log(nstr);
console.log(typeof book);