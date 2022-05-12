class Employee {
    static count:number=0;
    constructor(fname:string,lname:string,title:string){
      Employee.count++;
    }
    static getCount(){
        return Employee.count;
    }
}
const obj1=new Employee('anuj','singh','xyz');
const obj2=new Employee('amit','singh','bca');
const obj3=new Employee('amit','singh','bca');
console.log(Employee.getCount())