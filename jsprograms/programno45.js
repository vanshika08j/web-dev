const book = {
    name: "gulliver's travels",
    price: "399",
    genre: "fantasy"
}
const book2 = {
    name2: "The jungle book",
    author: "Rudyard kipling",


    read: function() {
        console.log("HAVE A READ!");
    },
    parts: {
        part1: "the hunt",
        part2: "climax"
    }
};
book.__proto__ = book2;
for (let key in book) {
    let x = book[key];
    console.log(key + "-" + x);
}