let str = prompt('ENTER THE STRING TO BE CHECKED:');

function palindrome(str) {
    for (let i = 0; i < (str.length / 2); i++) {
        if (str[i] !== str[(str.length) - 1 - i]) {
            return "Not a palindrome";
        } else {

            return "its palindrome";
        }
    }
}
const check = palindrome(str);
console.log(check);