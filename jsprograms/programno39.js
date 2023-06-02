let str = prompt("enter the string:");

function reqdstr(str) {

    let z = str.charAt(0);

    return z.toUpperCase() + str.slice(1);

}
let y = reqdstr(str);
console.log(y);