const book = {
    name: "gulliver's travels",
    price: "399",
    genre: "fantasy"
}
const cloneob = {
    ...book
};
cloneob.price = "500";
console.log(cloneob);
console.log(price);