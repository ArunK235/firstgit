/*this inside a global scope
this inside a function
this inside an Object
this inside a method 
this inside a inner function 
this inside a constructor
this inside a class*/

this.table='dinner table';//this inside a global scope
console.log(window.table);

const cleanTable = function(soap){ //this inside a function
    const innerfunction=(_soap)=>{ // this inside a inner function
        console.log(`cleaning ${this.table} using ${soap}`);
    }
    innerfunction(soap);    
};
this.garage={
    table:'garage table',
    //cleanTable(){
        //console.log(`cleaning ${this.table}`);
    //} //this inside an object
};
//let johnsroom={
    //table:'johns table', // this inside a method
    //cleanTable(){
        //console.log(`cleaning ${this.table}`);
    //}
//};
/*let createroom =function(name){ // this inside a constructor
    this.table=`${name}s table`
}*/
class createroom{         // this inside a class
    constructor(name){
        this.table=`${name}s table`
    }
    cleanTable(soap){
        console.log(`cleaning ${this.table}using ${soap}`);
    }
}
const jillsroom=new createroom('jill');
const johnsroom=new createroom('john');
cleanTable.call(this,'some soap');
cleanTable.call(this.garage,'some soap');
cleanTable.call(johnsroom,'some soap');
cleanTable.call(jillsroom,'some soap');

class student{
    static count=0;  
    constructor(name,age,ph_no,marks){
        this.name=name;
        this.age=age;
        this.ph_no=ph_no;
        this.marks=marks;
        student.countStudent();

    }
    static countStudent(){
        return(student.count++);  
    }
    eligible(){
        if(this.marks >=40){
            console.log(`${this.name}  is eligible`);
        }
        else if(this.marks<40){
            console.log(`${this.name}  is not eligible`);
        }
    }
}
const arun=new student('arun',18,1234,34);
const kumar=new student('kumar',15,2345,35);
const geetha=new student('geetha',16,4567,60);
const ganesh=new student('ganesh',17,7891,70);
const landa=new student('landa',19,3456,80);
console.log(student.countStudent());
arun.eligible();
kumar.eligible();
geetha.eligible();
landa.eligible();
ganesh.eligible();
