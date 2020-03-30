function findMax() {
    let point = [4, 6, 7, 8, 9];
    let max = point[0];
    for (let i = 0; i < point.length; i++) {
        if (max < point[i]) {
            max = point[i];
        } else {
            max = max;
        }
    }
    document.write(max);
}
findMax();