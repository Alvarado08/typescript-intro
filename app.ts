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
let goodStudent: boolean = true;
if(goodStudent){
    console.log('I am a good student');
}else{
    console.log('I am not a good student');
}

// number
let miami: number = 25;
let dallas: number = 30;
// if no return value will be outputed, use void
function totalScore(team1: number, team2: number): number{
    return team1 + team2;
}

// Union
let magic: number | string;
magic = 25;
console.log(magic);

//! Avoid using any
let something: any;
something = 'hello';
something = 25;
something = true;
something = [];
something = {};
something = () => {
    console.log('hello. I can be any type');
}

//* Arrays
let numArr: number[] = [1,2,3];
let strArr: string[] = ['hello', 'world'];
// Use this instead of any[]
let strNumArr: (string | number)[] = ['hello', 25];

//* Types
type Person = {
    name: string,
    age: number,
    isAdult: boolean | null,
    // ? means optional
    favoriteColor?: string,
    tech: string[]
}
let person1: Person = {
    name: 'John',
    age: 25,
    isAdult: true,
    favoriteColor: 'blue',
    tech: ['html', 'css', 'js']
}
let person2: Person = {
    name: 'Jane',
    age: 26,
    isAdult: true,
    tech: ['cobol', 'php', 'nodejs']
}

//* Interfaces
// Interfaces are similar to type but are more strict based on their blueprint
interface Student {
    name: string,
    age: number,
    isAdult: boolean | null
}
let student1: Student = {
    name: 'John',
    age: 25,
    isAdult: true
}
let student2: Student = {
    name: 'Jane',
    age: 26,
    isAdult: true
}
let student3 = {
    name: 'Jane',
    lastName: 'Doe',
    age: 26,
    isAdult: true
}
function showName(student: Student): void {
    // lastName would not work for interfaces if a different object contains the property
    // would work for type
    // console.log(student.lastName);
    console.log(student.name);
}

// OOP class
class Dog {
    // name: string = 'Lucky';
    // age: number = 4;
    // This type declartion part is unique to Typescript
    name?: string;
    age?: number;
    isAdult?: boolean;
    bark(): void {
        console.log(`${this.name} is ${this.age} years old and barks!`);
    }
    constructor(name: string, age: number){
        this.name = name,
        this.age = age
    }
}
// const lucky = new Dog();
// lucky.bark();
const gucci = new Dog('Gucci', 4);
gucci.bark();

//* Encapsulation, Generics
class Raffle<T> {
    private ticket?: T;

    constructor(private name: string){}

    setTicket(ticket: T) {
        this.ticket = ticket;
    }

    getTicket(){
        return this.ticket;
    }

    public startRaffle(): string {
        return `${this.name} has started the raffle with his ticket ${this.ticket}!`;
    }
}
const raffle = new Raffle<number>('John');
raffle.setTicket(25);
console.log(raffle.getTicket());

const raffle2 = new Raffle<string>('Jane');
raffle2.setTicket('3A');
console.log(raffle2.getTicket());