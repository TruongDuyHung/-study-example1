function Rectangle(x,y) {
    this.weight = parseInt(x);
    this.height = parseInt(y);
    this.perimeterRec = function () {
        return (this.weight + this.height) * 2;
    }
    this.areaRec = function () {
        return this.weight * this.height;
    }
    this.drawRectangle = function () {
        var rectangle = document.getElementById('canvas');
        var ctx = rectangle.getContext("2d");
        ctx.fillStyle = "red";
        ctx.fillRect(0,0,this.weight, this.height);
    }
}
function active() {
    let rectangle = new Rectangle(50, 30);
    let perimeter = rectangle.perimeterRec();
    let area = rectangle.areaRec();
    alert('Chu vi là ' + perimeter + " Dien tích là " + area);
    let draw = rectangle.drawRectangle();
    return draw;
}
active();
