var Person = /** @class */ (function () {
    function Person(name) {
        this._name = name;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var obj = new Person("sumit");
console.log(obj.name);
obj.name = "amit";
console.log(obj.name);
