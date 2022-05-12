var Employee = /** @class */ (function () {
    function Employee(fname, lname, title) {
        Employee.count++;
    }
    Employee.getCount = function () {
        return Employee.count;
    };
    Employee.count = 0;
    return Employee;
}());
var obj1 = new Employee('anuj', 'singh', 'xyz');
var obj2 = new Employee('amit', 'singh', 'bca');
var obj3 = new Employee('amit', 'singh', 'bca');
console.log(Employee.getCount());
