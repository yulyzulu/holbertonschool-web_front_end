function countPrimeNumbers() {
    let count = 0;
    for (let i = 2; i <= 100; i++) {
        let isPrime = true;
        for (let j = 2; j <= i; j++) {
            if (i % j === 0 && j !== i) {
                isPrime = false;
            }
        }
        if (isPrime === true) {
            count = count + 1;
        }
    }
    return count;
}

var t0 = performance.now();
for (let x = 0; x < 100; x++) {
    setTimeout(countPrimeNumbers);
}
var t1 = performance.now();
console.log("Execution time of calculating prime numbers 100 times was " + (t1 - t0) + " milliseconds.")