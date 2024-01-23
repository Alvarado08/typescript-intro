//* General
// tsc app.ts to compile typescript to javascript
// tsc app.ts -w to watch for file changes

//* Initialization
// tsc --init to initialize tsconfig.json
// after init, tsc -w to watch for project changes
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