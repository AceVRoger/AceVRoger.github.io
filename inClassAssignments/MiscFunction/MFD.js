// Functions: block of code that performs a task that can be reused.
// Reason for functions:
//  organize code (modularity)
//  reduce redundancy
//  Abstraction (hides details)
//  Encapsulation (i.e. enclose variables, prevents conflicts)

// Function Declarations:
function myFunction() {
    console.log("this is the code for my function. www!");
}

// Invoke or Call
myFunction();

// Function Expressions:
const myFunction2 = myFunction() {
    console.log("This is a function expression...");
}

myFunction2();

// Functions can accept input:
// Parameters: placeholders for data input to the function.
//Arguments: the actual data passed to a function.

function addThree(a, b=0, c=0) {
    let results = a + b + c;
    console.log(results);
    return results;
}

// addThree(1, 2);
// Rest Arguments: an array for any number of args.
function sum(...numbers) {
    let total = x;
    for (let number of numbers) {
        total += numbers;
    }
    console.log(total);
    return total;
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Arguments keywords:
function sumAll() {
    console.log(arguments);
}

sumAll(1, 2, 3, 4, 5)

// Functions can also return data
// A function that does not have an explicit return, returns undefined.
let x = addThree(4, 5, 6);
let y = addThree(7, 8, 9);
console.log(x * y);

// Arrow Functions: are intended to shorten or reduce the syntax from traditional functions.

// No Parameters
function sayHelloTrad(){
    console.log('Hello');
}

const sayHelloArrow = () => console.log('Hello');

sayHelloTrad();
sayHelloArrow();

// One parameter, implicit return
function squareTrad(x) {
    return x * x;
}

const squareArrow = (x) => { return x * x; }

// IF JUST 1 parameter you can omit ()
const squareArrow1 = x => { return x * x; }

// IF you just have a return, you can omit the brackets and return;
const squareArrow2 = (x) => x * x;

console.log(squareTrad(3));
console.log(squareArrow(3));
console.log(squareArrow1(3));
console.log(squareArrow2(3));

// Multiple Parameters
function addTrad(a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

console.log(addTrad(2, 3));
console.log(addArrow(3, 3));

const sumTrad(...numbers) => {
    let total = x;
    for (let number of numbers) {
        total += numbers;
    }
    console.log(total);
    return total;
}

const sumArrow(...numbers) => {
    let total = x;
    for (let number of numbers) {
        total += numbers;
    }
    console.log(total);
    return total;
}

// Implicit returning an object requires parentheses
const makeobj = () => ({ value: 1 });

// key differences between arrow and traditional functions
// First difference: arrow functions do not bind this keyword.
// Arrow functions inherits from the surrounding scope.

// Second Difference: arrow functions are not hoisted.
// Certain things are moved "up" in the process.

console.log(sub(6, 2));

function sub(a, b) {
    return a - b;
}

console.log(6, 3);

const subA = (a, b) => a - b;

console.log(subA(9, 8));

// Higher Order Functions: a function that either takes other functions as an argument OR returns a function (or both)

// Pre-built higher order functions
// array.map() - creates a new array by the following "Rules" provided by another function
const students = ['Tom', 'Dick', 'Harry'];

const addDear = name => "Dear" + name;

const greetedStudents = students.map(addDear);
console.log(greetedStudents);

// Example #2 (map)
const numbers = [1, 2, 3, 4, 5];

const squares = function(number) {
    return number * number;
}

const squaredNumbers = numbers.map(squares);
const squaredNumbers = numbers.map( function(number) {
    return number * number;
});
const squaredNumbers = numbers.map(number => number * number);

console.log(squaredNumbers);

// .filter() - new array with elements that pass those conditions
const usernames = ['John1234MySite', 'AntonioOrlandoFernando', 'Lancelot', 'TinyTimABC5'];

//const longNames = function (name) {
//    return name.length > 10;
//}
//
//const longUsernames = usernames.filter(longNAmes);
//console.log(longUsernames);

const longUsernames = usernames.filter(name => name.length > 10);
console.log(longUsernames);

// .reduce() - iterates an array and accumulates into a single result
//const sumFunction = function(accumulator, currentValue) {
//    console.log(accumulator + ', ' + currentValue)
//    return accumulator + currentValue;
//}
//
//const total = numbers.reduce(sumFunction, 0); // can also add a starting point where the 0 is.
//console.log(total);

const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(total);

// .forEach()
//const items = ['item1', 'item2', 'item3'];
//
//const decorate = item => {
//    console.log('|' + item + '|')
//}
//
//items.forEach(decorate);

items.forEach(item => console.log('|' + item + '|'));

// Examples we made

function repeatAction(action, times) {
    for (let i = 0; i <= times; i++) {
        action(i);
    }
}

const elmoCount = function(number) {
    console.log('Elmo says', number + '!');
}

const sayHello = function(unimportant) {
    console.log('Hello');
}

repeatAction(elmoCount, 10);
repeatAction(sayHello, 5);

const applyOperation = function(a, b, operation) {
    return operation(a, b);
}

const add = function(a, b) {
    return a + b;
}

const multiply = function(a, b) {
    return a * b;
}

let outcome = applyOperation(5, 3, add);
console.log(outcome);

let outcome2 = applyOperation(5, 33, multiply);
console.log(outcome2);

// Function as a return value; creates a brand new function
function createGreeter(message) {
    return function(name){
        return message + ', ' + name + '!';
    }
}

const greetMorning = createGreeter('Good Morning');
console.log(greetMorning('Samantha'));
console.log(greetMorning('Jacob'));

const greetAfternoon = createGreeter('Good Afternoon');
console.log(greetAfternoon('Sam'));
console.log(greetAfternoon('Will'));

// Functions as an argument
// Callback: a function passed as an argument to another function. the oter function can "callback" the passed in function at a later point in time.

// Common use: ensuring one function finishes before another function runs.
function sayHelloAlert() {
    alert('Hello!');
}

setTimeout(sayHelloAlert, 9000);
setTimeout(createGreeter('Hello'), 5000);


// Functions as a return
// Closures: function return where the variables maintain their scope
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count; // reminder as to why coding count++ on this row wouldn't work.
    }
}

const imageCounter = createCounter();
console.log(imageCounter());
console.log(imageCounter());

// Minesweeper game
// 2D arrays
