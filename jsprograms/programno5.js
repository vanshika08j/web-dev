let a = prompt('enter first variable:');
let b = prompt('enter second variable:');

let temp;

temp = a;
a = b;
b = temp;
console.log('first variable after swapping:' + a);
console.log('second variable after swapping:' + b);;