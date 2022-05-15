//01 area of triangle
// works in browser
let base = Number(prompt("Enter base: "));
let height = Number(prompt("Enter height: "));
console.log(`The area of the triangle ${0.5*base*height}`)

// for nodejs
// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter base: ", function(base){
//     rl.question("Enter height: ", function(height){
//         console.log(`The area of triangle is ${0.5*base*height}`);
//         //rl.close();
//     });
// });

// 02 perimeter of triangle
let sideA = Number(prompt("enter side A of the triangle"));
let sideB = Number(prompt("enter side B of the triangle"));
let sideC = Number(prompt("enter side C of the triangle"));
let perimeterOfTriangle = sideA + sideB + sideC;
console.log(`the perimeter of the triangle is ${perimeter}`)

// 03 area and perimeter of rectangle
let length = Number(prompt("length: "));
let width = Number(prompt("width: "));
let areaOfRectangle = length*width;
let perimeterOfRectangle = 2*(length+width);
console.log(`Area of rectangle: ${areaOfRectangle}, Perimeter of rectangle: ${perimeterOfRectangle}`);

// 04 area and circumference of circle
let radius = Number(prompt("Radius: "));
const pi = 3.14;
let areaOfCircle = pi*radius**2;
let circumferenceOfCircle = 2*pi*radius;
console.log(`Area of circle: ${areaOfCircle}, Circumference of circle: ${circumferenceOfCircle}`);

// 05
// 06 slop of a line
let x1 = Number(prompt("x1: "));
let y1 = Number(prompt("y1: "));
let x2 = Number(prompt("x2: "));
let y2 = Number(prompt("y2: "));
let slope = (y2-y1)/(x2-x1);
console.log(`slope , m=${slope}`);

// 07
// 08 equation 
let x = Number(prompt("x: "));
// eq1 = (x+3)^2
let eq1 = x**2+6*x+9;
console.log(`y= ${eq1}`);

// 09 per day pay
let hours = Number(prompt("enter your hours"));
let rate = Number(prompt("enter your rate"));
let pay = hours * rate;
console.log(`your pay is ${pay}`)

// 10 length of name
let yourName  = String(prompt("Your name: "));
if (yourName.length > 7) {
    console.log("Your name is greater.");
} else {
    console.log("Your name is short.");
}

// 11 myAge and yourAge
let myAge = 250;
let yourAge = 25;
console.log(`I am ${myAge-yourAge} older than you.`);

// 12 //allowed to drive
let age = Number(prompt("what is your age"));
if (age > 18) {
    console.log("you are allowed to drive");
} else {
    console.log(`you are ${age}, you will be allowed to drive after ${18 - age} years`)
}

// 13 Human date time

const now = new Date();
// i
console.log(now.getFullYear()+"-"+now.getMonth()+"-"+now.getDate()+" "+now.getHours()+":"+now.getMinutes());
// ii
console.log(now.getDate()+"-"+now.getMonth()+"-"+now.getFullYear()+" "+now.getHours()+":"+now.getMinutes());
// iii
console.log(now.getDate()+"/"+now.getMonth()+"/"+now.getFullYear()+" "+now.getHours()+":"+now.getMinutes());