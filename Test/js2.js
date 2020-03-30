let arryInt = [3,4,5,6,7,8];
let count = 3;
function tryRemoveFromArry(arrInt,count) {
for (let i = 0;i<arrInt.length;i++) {
    if (count!= arrInt[i]) {
        document.write(arrInt);
        return;
    } else {
        arrInt.splice(i,1);
        document.write(arrInt);
        return;
    }
}
}
tryRemoveFromArry(arryInt,count);