let count = 0;
let temp = [];
let checkwin =[];
let nameplay = document.getElementById("nameplay");
function ShowImage(number, colrow) {
    this.colrow = colrow;
    this.number = number;
    this.arrImg = [];
    this.addImg = function () {
        for (let i = 1; i <= this.number; i++) {
            this.arrImg.push(i, i);
        }
        return this.arrImg;
    };
    this.randomArr = function () {
        for (let k = this.arrImg.length - 1; k > 0; k--) {
            let h = Math.floor(Math.random() * (k + 1));
            let temp = this.arrImg[k];
            this.arrImg[k] = this.arrImg[h];
            this.arrImg[h] = temp;
        }
        console.log(this.arrImg);
        return this.arrImg;
    };
    this.drawImg = function () {
        this.randomArr();//goi Phuong thuc lay random thu tu
        let table = "<table>";
        for (let i = 0; i < this.colrow; i++) {
            table += "<tr>";
            for (let j = 0; j < this.colrow; j++) {
                let nameimg = this.arrImg[(this.colrow * i) + j];
                console.log(nameimg);
                table += "<td><img src='magic.gif' width='100px' height='100px' onclick='Click(this,this.name)' name = '" + nameimg + "' ></td>";
            }
            table += "</tr></table>";
            let drawtabale = document.getElementById("table");
            drawtabale.innerHTML = table;
        }
    }
}
function Click(img, name) {
    count++;
    this.name = name;
    if (count <= 2) {
        img.src = "image" + this.name + ".jpg";
        img.setAttribute("onclick","");
        console.log(img);
        temp.push(img);
        if (count === 2) {
            setTimeout(Check, 700, temp[0], temp[1])
        }
    }
}
function Check(item1, item2) { //check 2 select.
    if (item1.name !== item2.name) {
        item1.src = "magic.gif";
        item1.setAttribute("onclick","Click(this,this.name)");
        item2.src = "magic.gif";
        item2.setAttribute("onclick","Click(this,this.name)");
    } else {
        checkwin.push(1,1);
        let coutCheckWin = checkwin.length; //if win;
        if(coutCheckWin >=16){
            let Board = new ShowImage(8, 4);
            Board.addImg();
            Board.drawImg();
            checkwin = [];
            nameplay.innerHTML="";
        }
    }
    count = 0;
    temp = [];
}
function BoardReset(){
    let Board = new ShowImage(8, 4);
    Board.addImg();
    Board.drawImg();
    coutCheckWin = [];
}


