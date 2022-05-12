var Car = /** @class */ (function () {
    function Car() {
        this.speed = 50;
    }
    Car.prototype.acc = function () {
        this.speed += 100;
    };
    Car.prototype.checkSpeed = function () {
        console.log("The speed is ".concat(this.speed));
    };
    return Car;
}());
var obj = new Car;
obj.checkSpeed();
obj.acc();
obj.checkSpeed();
