//* General
// tsc app.ts to compile typescript to javascript
// tsc app.ts -w to watch for file changes
//* Initialization
// tsc --init to initialize tsconfig.json
// after init, tsc -w to watch for project changes
console.log('Hello World in Typescript');
//* Primitive Data Types
// boolean
var goodStudent = true;
if (goodStudent) {
    console.log('I am a good student');
}
else {
    console.log('I am not a good student');
}
// number
var miami = 25;
var dallas = 30;
// if no return value will be outputed, use void
function totalScore(team1, team2) {
    return team1 + team2;
}
var magic;
magic = 25;
console.log(magic);
//! Avoid using any
var something;
something = 'hello';
something = 25;
something = true;
something = [];
something = {};
something = function () {
    console.log('hello. I can be any type');
};
//* Arrays
var numArr = [1, 2, 3];
var strArr = ['hello', 'world'];
// Use this instead of any[]
var strNumArr = ['hello', 25];
