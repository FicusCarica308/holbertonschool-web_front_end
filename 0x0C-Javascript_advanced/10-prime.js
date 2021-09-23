function countPrimeNumbers () {
    let is_prime = true;
    let numCount = 0;
    for (let i = 2; i <= 100; i++) {
        is_prime = true;
        for(let k = 2; k <= i - 1; k++) {
            if (i % k == 0) {
                is_prime = false;
                break;
            }
        }
        if (is_prime == true)
            numCount++;
    }
    return (numCount);
}

const timeStart = performance.now();
for (let i = 0; i < 100; i++) {
   countPrimeNumbers();
}
const timeFinish = performance.now();
const finalTime = timeFinish - timeStart;
console.log("Execution time of printing countPrimeNumbers was " + finalTime + " milliseconds.");
