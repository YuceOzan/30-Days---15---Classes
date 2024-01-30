//1. CREATE AN ANIMAL CLASS : NAME, AGE, COLOR, LEGS PROPERTIES WITH DIFFERENT METHODS

class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}`);
    }

    canWalk() {
        if (this.legs > 2) {
            console.log(`${this.name} can walk.`);
        } else {
            console.log(`${this.name} cannot walk.`);
        }
    }
}

const ares = new Animal("Ares", 3, "brown", 4);

console.log(ares);
ares.displayInfo();
ares.canWalk();

export {Animal};

//2. CREATE A DOG AND CAT CHILD CLASS


class Dog extends Animal {
    constructor(name, age, color, breed) {
        super(name, age, color, 4);
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} barks: Woof, woof!`);
    }
}

class Cat extends Animal {
    constructor(name, age, color, isLazy) {
        super(name, age, color, 4);
        this.isLazy = isLazy;
    }

    meow() {
        console.log(`${this.name} meows: Meow, meow!`);
    }
}

const myDog = new Dog("Cookie", 2, "brown", "Golden Retriever");
const myCat = new Cat("Whiskers", 1, "gray", true);

myDog.displayInfo();
myDog.canWalk();

myCat.displayInfo();
myCat.canWalk();

myDog.bark();
myCat.meow();