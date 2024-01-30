import { Animal } from "./Exercice_lvl_1.js";

//1. OVERRIDE A METHOD IN ANIMAL CLASS

class Dog extends Animal {
    constructor(name, age, color, breed) {
        super(name, age, color, 4);
        this.breed = breed;
    }

    displayInfo() {
        console.log(`Dog Info: Name: ${this.name}, Age: ${this.age}, Breed: ${this.breed}`);
    }
}

class Cat extends Animal {
    constructor(name, age, color, isLazy) {
        super(name, age, color, 4);
        this.isLazy = isLazy;
    }

    displayInfo() {
        console.log(`Cat Info: Name: ${this.name}, Age: ${this.age}, Is Lazy: ${this.isLazy}`);
    }
}

const myDog = new Dog("Cookie", 2, "brown", "Golden Retriever");
const myCat = new Cat("Whiskers", 1, "gray", true);


myDog.displayInfo();
myCat.displayInfo();