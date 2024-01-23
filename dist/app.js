"use strict";
//* General
// tsc app.ts to compile typescript to javascript
// tsc app.ts -w to watch for file changes
//* Initialization
// tsc -init to initialize tsconfig.json
// after init, tsc -w to watch for project changes
// tsc file.ts -w to watch for a specified file changes
console.log('Hello World in Typescript');
//* Primitive Data Types
// boolean
let goodStudent = true;
if (goodStudent) {
    console.log('I am a good student');
}
else {
    console.log('I am not a good student');
}
// number
let miami = 25;
let dallas = 30;
// if no return value will be outputed, use void
function totalScore(team1, team2) {
    return team1 + team2;
}
let magic;
magic = 25;
console.log(magic);
//! Avoid using any
let something;
something = 'hello';
something = 25;
something = true;
something = [];
something = {};
something = () => {
    console.log('hello. I can be any type');
};
//* Arrays
let numArr = [1, 2, 3];
let strArr = ['hello', 'world'];
// Use this instead of any[]
let strNumArr = ['hello', 25];
let person1 = {
    name: 'John',
    age: 25,
    isAdult: true,
    favoriteColor: 'blue',
    tech: ['html', 'css', 'js']
};
let person2 = {
    name: 'Jane',
    age: 26,
    isAdult: true,
    tech: ['cobol', 'php', 'nodejs']
};
let student1 = {
    name: 'John',
    age: 25,
    isAdult: true
};
let student2 = {
    name: 'Jane',
    age: 26,
    isAdult: true
};
let student3 = {
    name: 'Jane',
    lastName: 'Doe',
    age: 26,
    isAdult: true
};
function showName(student) {
    // lastName would not work for interfaces if a different object contains the property
    // would work for type
    // console.log(student.lastName);
    console.log(student.name);
}
// OOP class
class Dog {
    bark() {
        console.log(`${this.name} is ${this.age} years old and barks!`);
    }
    constructor(name, age) {
        this.name = name,
            this.age = age;
    }
}
// const lucky = new Dog();
// lucky.bark();
const gucci = new Dog('Gucci', 4);
gucci.bark();
//* Encapsulation, Generics
class Raffle {
    constructor(name) {
        this.name = name;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    startRaffle() {
        return `${this.name} has started the raffle with his ticket ${this.ticket}!`;
    }
}
const raffle = new Raffle('John');
raffle.setTicket(25);
console.log(raffle.getTicket());
const raffle2 = new Raffle('Jane');
raffle2.setTicket('3A');
console.log(raffle2.getTicket());
