const book = {
    name: "gulliver's travels",
    price: "399",
    genre: "fantasy"
}
const keyy = 'price' in book;
if (keyy) {
    console.log("its present");
} else {
    console.log("not present");
}