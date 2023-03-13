const prompt = require("prompt-sync")();

//1. Read a single digit number and write the number in word using Case
let num = parseInt(prompt("Enter the number"));

switch(num)
{
    case 1:
        console.log("One");
    break;
    case 2:
        console.log("Two");
    break;
    case 3:
        console.log("Three");
    break;
    case 4:
        console.log("Four");
    break;
    case 5:
        console.log("Five");
    break;
    case 6:
        console.log("Six");
    break;
    case 7:
        console.log("Seven");
    break;
    case 8:
        console.log("Eight");
    break;
    case 9:
        console.log("Nine");
    break;
    default:
        console.log("Inalid input");
 
}


//2. Read a Number and Display the week day (Sunday, Monday,...)

let num = parseInt(prompt("Enter the number"));

switch(num)
{
    case 1:
        console.log("Monday");
    break;
    case 2:
        console.log("Tuesday");
    break;
    case 3:
        console.log("Wednesday");
    break;
    case 4:
        console.log("Thursday");
    break;
    case 5:
        console.log("Friday");
    break;
    case 6:
        console.log("Saturday");
    break;
    case 7:
        console.log("Sunday");
    break;
    default:
        console.log("Inalid input");
 
}

//3. Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

let num = parseInt(prompt("Enter the number"));

switch(num)
{
    case 1:
        console.log("unit");
    break;
    case 10:
        console.log("ten");
    break;
    case 100:
        console.log("hundred");
    break;
    case 1000:
        console.log("Thousand");
    break;
    default:
        console.log("Inalid input");
 
}



//4. Write a program that takes User Inputs and does Unit Conversion of different Length units


var randomOption = Math.floor(Math.random()*10)%4 + 1;
var smallValue = Math.floor(Math.random()*100);
var bigValue = Math.floor(Math.random()*10000);
var result =0.000000;
switch (randomOption) {
    case 1:
        console.log("   1. Feet to Inch :: ( 1ft = 12 inch )");
        result = smallValue * 12;
        console.log(" Input Value in feet :: " + smallValue+'\n'+ " Output Value in Inch :: " + result);
        break;
    case 2:
        console.log("   2. Feet to Meter :: ( 1ft = 0.3048)");
        result = bigValue * 0.3048;
        console.log(" Input Value in feet :: " + bigValue+'\n'+ " Output Value in meter :: " + result);
        break;
    case 3:
        console.log("   3. Inch to Feet :: ( 1 inch = 0.0833333 ft)");
        result = bigValue * 0.0833333;
        console.log(" Input Value in inch :: " + bigValue+'\n'+ " Output Value in feet :: " + result);
        break;
    case 4:
        console.log("   4. Meter to Feet :: ( 1 m = 3.28084 ft)");
        result = smallValue * 3.28084;
        console.log(" Input Value in meter :: " + smallValue+'\n'+ " Output Value in feet :: " + result);
        break;
    default:
        console.warn("Invalid Input");
        break;
}