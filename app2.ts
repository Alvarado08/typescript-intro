console.log('Hello World in Typescript2');

class Cat {
    // name: string = 'Lucky';
    // age: number = 4;
    // This type declartion part is unique to Typescript
    name?: string;
    age?: number;
    isAdult?: boolean;
    meow(): void {
        console.log(`${this.name} is ${this.age} years old and meows!`);
    }
    constructor(name: string, age: number){
        this.name = name,
        this.age = age
    }
}
const snow = new Cat('Snow', 4);
snow.meow();