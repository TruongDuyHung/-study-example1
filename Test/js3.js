let n = 10;
let b;
let arr=[];
function creatFibonacci(n) {
   let x= 0;
   if (n==0) return(x);
   if (n==1) {
   x+=1;
   return x;
   } else {
       return (creatFibonacci(n-1)+creatFibonacci(n-2));
   }
}
function writeFibonacci(n) {
    for (let i =0;i<=n;i++) {
        b += " " +creatFibonacci(i);
    }
    arr.push(b);
    document.write(arr);
    return;
}

function isFibonacci() {
    let x = parseInt(prompt('Nhap vao so nguyen: '));
    for (let i = 0; i < arr.length; i++) {
        if (x == arr[i]) {
           console.log(true);
           return;
        }
        else  console.log(false);
    }
}
writeFibonacci(n);
creatFibonacci(n);
