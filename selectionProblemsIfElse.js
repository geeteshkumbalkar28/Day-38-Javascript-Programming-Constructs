
const prompt = require("prompt-sync")();

//1. Read a single digit number and write the number in word

let num = parseInt(prompt("Enter the number"));

if(num == 1) console.log("One");
else if(num == 2) console.log("Two");
else if(num == 3) console.log("Three");
else if(num == 4) console.log("Four");
else if(num == 5) console.log("Five");
else if(num == 6) console.log("Six");
else if(num == 7) console.log("Seven");
else if(num == 8) console.log("Eight");
else if(num == 9) console.log("Nine");



//2. Read a Number and Display the week day (Sunday, Monday,...)

let num = parseInt(prompt("Enter the number"));

if(num == 1) console.log("Monday");
else if(num == 2) console.log("Tuesday");
else if(num == 3) console.log("Wednesday");
else if(num == 4) console.log("Thursday");
else if(num == 5) console.log("Friday");
else if(num == 6) console.log("Saturday");
else if(num == 7) console.log("Sunday");

else console.log("Enter valid number");

//3. Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

let num = parseInt(prompt("Enter the number"));

if(num >= 1 && num < 10) console.log("unit");
else if(num >= 10 && num < 100) console.log("ten");
else if(num >= 100 && num < 1000) console.log("hundred");
else if(num >= 1000 && num < 10000) console.log("Thousand");
else console.log("Enter valid number");


//4. Enter 3 Numbers do following arithmetic operation and find the one that is maximum and minimum

let a = parseInt(prompt("Enter the number 1"));

let b = parseInt(prompt("Enter the number 2"));

let c = parseInt(prompt("Enter the number 3"));


resultOne = a + b * c;
resultTwo = c + a / b;
resultThree =a % b + c;
resultFour = a * b + c;

Max = resultOne;

Min = resultOne;

if(Max < resultTwo && Max > resultThree && Max > resultFour) Max = resultTwo;
else if(Max < resultThree && Max > resultTwo && Max > resultFour) Max = resultThree;
else if(Max < resultFour && Max > resultThree && Max > resultTwo) Max = resultThree;

if(Min > resultTwo && Min < resultThree && Min < resultFour) Min = resultTwo;
else if(Min > resultThree && Min < resultTwo && Min < resultFour) Min = resultThree;
else if(Min > resultFour && Min < resultThree && Min < resultTwo) Min = resultThree;

console.log("Maximum value is : "+Max);
console.log("Minimum value is : "+Min);
