class Person{

    constructor(name,age,occupation){
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }

    getName(){
        console.log(this.name);
    }


    displayInfo(){
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Occupation: " + this.occupation);
        console.log("-----------------");
    }

}

const person1 = new Person("Ric",19,"Writer");

person1.getName();
person1.displayInfo();