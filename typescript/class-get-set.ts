class Person {
    _name:string;
    constructor(name){
        this._name=name;
    }
    get name(){
        return this._name;
    }
    set name(newName){
        this._name=newName;
    }
}
const obj=new Person("sumit");
console.log(obj.name);
obj.name="amit"
console.log(obj.name);