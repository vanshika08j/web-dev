let n = prompt('enter the lowervalue:');
let m = prompt('enter the uppervalue:');


for (let i = n; i <= m; i++) {
    let c = 0;
    for (let k = 2; k <= (i / 2); k++) {
        if (i % k == 0) {
            c++;
        }

    }
    if ((c === 0) && (i > 1)) {
        console.log(i);

    }

}