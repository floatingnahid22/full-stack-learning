"use strict";
//built in data types in typescript: string, number, boolean, null, void, undefined, any
let userId;
let firstName;
let lastName;
let age;
let fullName;
function getUserName() {
    return fullName;
}
userId = 1234;
firstName = "Nahid";
lastName = "Hossain";
age = 28;
fullName = firstName + " " + lastName;
getUserName();
console.log(`User Id: ${userId}, Full Name: ${fullName}, Age: ${age}`);
