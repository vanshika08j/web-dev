let str = prompt("enter the string");

let i = 0;

function reverse(str) {

    if (str == "") {
        return "";
    }
    return reverse(str.substr(1)) + str.charAt(0);

}
let revstr = reverse(str);
console.log(revstr);