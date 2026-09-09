//built in data types in typescript: string, number, boolean, null, void, undefined, any

let userId;
let firstName: string;
let lastName: string;
let age: number;
let fullName: string;

function getUserName(): string {
  return fullName;
}

userId = 1234;
firstName = "Nahid";
lastName= "Hossain";
age=28;
fullName = firstName + " " + lastName;

getUserName();

console.log(`User Id: ${userId}, Full Name: ${fullName}, Age: ${age}`);
