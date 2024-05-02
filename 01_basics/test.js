console.log("apoorva")
"use strict"; // treat all JS code as newer version
// null => standalone value does not point any object 
// undefined => declared but not assigned a value
// symbol => unique

console.log(typeof undefined); // undefined
console.log(typeof null); // object
// to fetch data
const name = "hitesh"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//to declare number  or any other dATA
const balance = new Number(100)
const gameName = new String('hitesh-hc-com')
console.log(gameName[2]);
const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);
console.log(gameName.__proto__);//exposes the [[Prototype]] (either an object or null ) of this object

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
