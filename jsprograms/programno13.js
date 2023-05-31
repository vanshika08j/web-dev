let n = prompt('Enter a No :');
let c = 0;
for (let i = 1; i <= n / 2; i++) {
    if (n % i == 0)
        c++;

}
if (c === 1) console.log('No. is prime');
else
    console.log('No. is not prime');