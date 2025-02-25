

// Errors and error Handling

// Four types of errors:
// syntax errors: the code that violates the "rules" of the JS Language
    // Typically (not always) causes the program to not run.
//console.log("Hellow World!";
//console.log("Hello World!);
//return 19;
//let this = 10;
//function myFunction()
//    console.log(0);
//function() { console.log(0); }
//let numbers = [1, 2, 3, 4];
//const x;
//
//if (x == 15) {
//  console.log(1);
//} else {
//    console.log(0);
//}

//Load Errors: occurs when required resources fail to load.
// doesn't always have to be human error (i.e. broken filepath)
// can be anything that prevents the resource from loading (broken link, missing resource, bad/slow connection etc.)

//LogicErrors: program runs just fine, but it doesn't do what its suppose to do.
// typically the hardest to fix, best to avoid up front

let weather = 20;

if (weather < 80)
    console.log("Too Hot!");
else
    console.log("Too Cold!");

//Runtime Errors: occurs during execution of script, even if the syntax is correct.

// Reference Error
//console.log(someVariable);

//TypeError
//let someFunction = null;
//someFunction();

//RangeError
//function recurse() {
//    recurse();
//}
//recurse();

//RangeError
//let arr = new Array(-1);
//console.log(arr);

//Rule of Thumb: if you can solve your problem with well-constructed code then do it.
    // only when you can't do so, should you use exception handling

// What is exception Handling: where you write code to handle those types of "tricky" situations where something might go wrong.

//two or three blocks: try, catch, finally

//try: attempt to execute that might cause a problem
// if problem occurs, we run catch. otherwise just keep going

//catch: runs if code does find a problem;

//finally: runs no matter what.

//custom Error:
class RhodesError extends Error {
    constructor(message) {
        super(message);
        this.name = "RhodesError";
    }
}

try {
    let number = 150;

    if (number < 0)
        throw new Error("Enter a positive number dummy.");
    else if (number > 100)
        throw new RhodesError("Maximum length exceeded.")

    let arr = new Array(number);
    console.log(arr);

    function recurse() {
        recurse();
    }
    recurse();
}
catch (error) {
    console.log("Error detected:", error.name, error.message);
}
finally {
    console.log("Wrapping up operations.");
}