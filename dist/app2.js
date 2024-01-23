"use strict";
console.log('Hello World in Typescript2');
class Cat {
    meow() {
        console.log(`${this.name} is ${this.age} years old and meows!`);
    }
    constructor(name, age) {
        this.name = name,
            this.age = age;
    }
}
const snow = new Cat('Snow', 4);
snow.meow();
