/*var student1={
    name:"keya hazra",
    age:24,
    cgpa:6.19,
    lang:["bangali","english","hindi"]

}
console.log(student1.name);
console.log(student1.age);
console.log(student1.cgpa);
console.log(student1.lang);*/

function student(name,age,cgpa,lang) {
    this.name=name;
    this.age=age;
    this.cgpa=cgpa;
    this.lang=lang;
    
}
var student1=new student("keya hazra",24,6.19,["bangla","english"]);
var student2=new student("mehet hazra",22,7,["bangla","english","hindi"]);
console.log(student1.name);
console.log(student2.nam