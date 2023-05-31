const x = prompt('ENTER DESIRED OPERATION (+,-,/,*):');


const a = parseFloat(prompt('ENTER FIRST NO.:'));
const b = parseFloat(prompt('ENTER SECOND NO.:'));
let result;
switch (x) {


    case '+':
        result = a + b;
        break;

    case '-':
        result = a - b;
        break;

    case '*':
        result = a * b;
        break;

    case '/':
        result = a / b;
        break;

    default:
        console.log('invalid choice')
        break;
}
console.log(result);