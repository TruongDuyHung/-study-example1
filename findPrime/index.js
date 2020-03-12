function checkPrime(num1) {
    for (let i = 2; i <= num1 / 2; i++) {
        if (num1 % i == 0) {
            return false;
        }
    } return true;
}
function outputPrime() {
    let num1 = parseInt(prompt('Nhap'));
    let count = 0;
    let N = 2;
    while (count < num1) {
        if (checkPrime(N)) {
           document.write(N +' ');
            count++;
        }
        N++;
    }
}