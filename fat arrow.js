//fat arrow functions
var x=function(){
    this.val=1;
    setTimeout(()=>{
        this.val++;
        console.log(this.val)

    },1)
};
var xx=new x();

//2 and 3
class student{
     
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
        
    }
    setplacementage(minplacementage){
        return (minmarks)=>{
            if(this.marks>minmarks && this.age>minplacementage){
                console.log(this.name+ 'is eligible');
            }
            else{
                console.log(this.name+ 'is not eligible');
            }
        }
    }
}

const arun=new student('arun',19,45);
const kumar=new student('kumar',15,35);
const geetha=new student('geetha',16,60);
const ganesh=new student('ganesh',17,70);
const landa=new student('landa',19,80);

arun.setplacementage(18)(40);
kumar.setplacementage(18)(40);
geetha.setplacementage(18)(40);
landa.setplacementage(18)(40);
ganesh.setplacementage(18)(40);