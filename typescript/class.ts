class Car {
    private speed:number;
    constructor(){
        this.speed=50;
    }
    acc(){
        this.speed+=100;
    }
    checkSpeed(){
        console.log(`The speed is ${this.speed}`)
    }
}
const obj=new Car;
obj.checkSpeed();
obj.acc();
obj.checkSpeed();