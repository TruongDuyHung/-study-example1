function Circle(x,y,radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}
    function creatCircle() {
        var ctx = document.getElementById("myCanvas").getContext("2d");
        var circle = new Circle(500, 500, 80);
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
function creatCircle1() {
var ctx = document.getElementById("myCanvas").getContext("2d");
var radius = Math.floor(Math.random()*80);
var x = Math.random()*window.innerWidth;
var y = Math.random()*window.innerHeight;
var circle = new Circle(x,y,radius);
var color = getRandomColor();
ctx.beginPath();
ctx.arc(circle.x,circle.y,circle.radius,0,2*Math.PI);
ctx.fillStyle = color;
ctx.fill();
}
function getRandomHex() {
return Math.floor(Math.random()*255);
}
function getRandomColor() {
var red = getRandomHex();
var green = getRandomHex();
var blue = getRandomHex();
return "rgb("+red + "," + blue + "," +green +")";
}
function creatMultipleCircle() {
for (let i = 0;i<50;i++)
    creatCircle1()
}
creatMultipleCircle();

