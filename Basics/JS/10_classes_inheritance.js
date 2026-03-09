//creating objects with constructor methods
function Car(name , model){
    this.name = name;
    this.model = model;
}

const car1 = new Car("volvo" , 2021);
console.log(car1);

//with ES6 classes

class Animal{
    static TotalAnimals = 0;
    static howMany(){
        return ("there are " + Animal.TotalAnimals + " animals alive");
    }
    constructor(name , age){
        this._name = name;
        this._age = age;
        Animal.TotalAnimals++;
    }

    get name(){return this._name};
    set name(val){
        this._name = val;
    }

    eat(){console.log(this.name , "is eating...")}
}

class Dog extends Animal{
    constructor(name , age, breed){
        super(name , age);
        this._breed = breed;
    }

    bark(){
        console.log(this.name , "is barking...");
    }

}

const golden = new Dog('jack' , 20 , 'retriver');
const cuppy = new Dog('cupcake' , 20 , 'bulldog');

console.log(golden);
golden.name = 'Don';
console.log(golden.name);

cuppy.eat();
cuppy.bark();

console.log(Animal.TotalAnimals);
console.log(Animal.howMany());