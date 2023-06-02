let str = prompt("enter the sentence:");
let cv = 0;
for (let i = 0; i < str.length; i++) {
    let x = str.charAt(i);
    if (x == 'a' || x == 'e' || x == 'i' || x == 'o' ||
        x == 'u' || x == 'A' || x == 'E' || x == 'I' || x == 'O' || x == 'U')
        cv++;
}
console.log('No. of vowels in a string: ' + cv);