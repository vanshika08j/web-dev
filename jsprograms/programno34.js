let x = prompt('enter the sentence:');
let words = x.split(" ");
words.sort();
for (const i of words) {
    console.log(i);
}