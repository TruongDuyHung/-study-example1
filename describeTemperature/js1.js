let Temperature =function (x,) {
this.c=x;
this.f = this.c*1.8 + 32;
this.k= this.c+273.15;
}
let temperature= new Temperature(25);
let doF = temperature.f;
let doK= temperature.k;
alert('Do f la: ' + doF + ' Do K la: ' + doK);