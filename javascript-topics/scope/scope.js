// A scope is a context in which variables are defined and accessible. In JavaScript, there are different types of scopes, including global scope, function scope, and block scope.

// Global Scope: Variables declared outside of any function or block are in the global scope. They can be accessed from anywhere in the code.
let globalVariable = "I am a global variable";


// Function Scope: Variables declared within a function are in the function scope. They can only be accessed from within that function.
function myFunction() {
  let functionVariable = "I am a function variable";
  return `${globalVariable} and ${functionVariable}`;
}
console.log(myFunction());

// Block Scope: Variables declared with let or const within a block (e.g., inside an if statement or a loop) are in the block scope. They can only be accessed from within that block.
if (true) {
  let blockVariable = "I am a block variable";
  console.log(globalVariable); // Accessible
  console.log(blockVariable); // Accessible
}

/*
  Real-life use of scope:
    Scopes are used to control the visibility and lifetime of variables in a program. They help prevent naming conflicts and make code more maintainable.

    Scope has two important purposes:
      1. Access control → where can I access this variable?
      2. Avoid naming conflicts → different parts of the program can safely use the same variable names.
*/

let name = "Nahid";
let age = 29;
let city = "Dhaka";

function getPersonalInfo() {
  let name = "Hossain";
  let age = 30;

  return `${name} is ${age} years old and lives in ${city}`;
}

console.log(getPersonalInfo());
console.log(`${name} is ${age} years old and lives in ${city}`);

// Here, the variables name and age are defined in both the global scope and the function scope. The function getPersonalInfo() has its own local variables name and age, which shadow the global variables with the same names. The variable city is only defined in the global scope, so it can be accessed from within the function.

let car = "Honda Civic";
let year = 2020;

function getCarInfo() {
  let car = "BMW 3 Series";
  let year = 2020;
  let company = "BMW";

  return `${car} is a ${year} ${company} car`;
}

console.log(getCarInfo());
console.log(`${car} is a ${year} ${company} car`);

// Here, the variables car and year are defined in both the global scope and the function scope. The function getCarInfo() has its own local variables car and year, which shadow the global variables with the same names. The variable company is only defined in the function scope, so it cannot be accessed from the global scope. It will give a ReferenceError if you try to access it outside the function.

// So Inner scope can access outer scope but outer scope cannot access inner scope.
