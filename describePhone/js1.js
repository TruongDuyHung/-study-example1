let battery = document.getElementById('battery');
class Mobile {
    constructor(name) {
        this.name = name;
        this.status = true;
        this.battery = 100;
        this.msg = "";
        this.inbox = [];
        this.outbox = [];
    }
    writeMsg(value) {
        if (this.status) {
            this.msg = value;
        }
    }
    receiveMsg(name, msg) {
        if (this.status) {
            this.inbox.push(name + " : " + msg);
            this.reduceBattery();
            battery.innerHTML = mobile1.battery + "%";
        }
    }
    sendMsg(mobile) {
        if (this.status) {
            mobile.receiveMsg(this.name, this.msg);
            this.outbox.push(this.msg);
            this.reduceBattery();
            battery.innerHTML = mobile1.battery + "%";
        }
    }
    checkStatus() {
        if (this.status) {
            if (this.status) {
                alert("Iphone is on");
                this.status = true;
            } else {
                alert("Iphone is off");
                this.status = false;
            }
            this.reduceBattery();
            battery.innerHTML = mobile1.battery + "%";
        }
    }
    changeStatus() {
        if (this.status) {
            this.status = false;
            alert("Iphone is off");
        } else {
            this.status = true;
            alert("Iphone is on");
        }
    }
    reduceBattery() {
        this.battery -= 1;
    }
    addBattery() {
        if (this.status) {
            if (this.battery < 100) {
                this.battery++;
            }
            battery.innerHTML = this.battery + "%";
            setTimeout(function () {
                mobile1.addBattery()
            }, 3000)
        }
    }
}
let mobile1 = new Mobile("Iphone");
let mobile2 = new Mobile("SamSung");
document.getElementById('battery').innerHTML = mobile1.battery + "%";
console.log(mobile1);
console.log(mobile2);
function sendMess(m1, m2) {
    m1.sendMsg(m2);
    document.getElementById('iphone-inbox').innerHTML = mobile1.inbox;
    document.getElementById('iphone-outbox').innerHTML = mobile1.outbox;
    document.getElementById('samsung-inbox').innerHTML = mobile2.inbox;
    document.getElementById('samsung-outbox').innerHTML = mobile2.outbox;
    document.getElementById('iphone-msg').value = "";
    document.getElementById('samsung-msg').value = "";
}