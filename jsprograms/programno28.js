const suits = ["heart", "spade", "club", "diamond"];
const values = ["ace",
    "king ", "queen", "jack", "10",
    "2", "3 ", "4", "5", "6", "7", "8", "9"
];
let deck = [];
for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
        let card = { value: values[j], suit: suits[i] }
        deck.push(card);
    }
}
let temp;
for (let k = deck.length - 1; k > 0; k--) {
    let x = Math.floor(Math.random() * k);
    temp = deck[k];
    deck[k] = deck[x];
    deck[x] = temp;
}
for (let p = 0; p < 5; p++) {
    console.log(`${deck[p].value} of  ${deck[p].suit}`);
}