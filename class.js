class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "kolimunnesa school" //common property

    }

}

const student1 = new Student(12, "Shuvo");
const student2 = new Student(32, "Muvo");
const student3 = new Student(42, "Bappi");

console.log(student1, student2);
console.log(student3);