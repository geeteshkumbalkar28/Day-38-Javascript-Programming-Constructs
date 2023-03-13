const prompt = require("prompt-sync")();
//1. Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value

let arr=[]



for(let i=0;i<3;i++)
{
    let randomTwoDigitValue = (Math.floor(Math.random()*900)+100)
    console.log(randomTwoDigitValue)
    arr.push(randomTwoDigitValue)
}
let max = arr[0];
    for(let i=1;i<arr.length;i++)
    {
        if(arr[i]>max)
        {
            max = arr[i];
        }
    }
console.log("Maximum no is "+max)

//2. Write a program that takes day and month from the command line and prints true if day of month is between March 20 and June 20, false otherwise.
 


let day = parseInt(prompt("Enter day :"))
let month = prompt("Enter month :")

if(day > 19 && month == "March"){
    console.log(true);
}
else if(day >0 && ( month == "April" || month == "May")){
    console.log(true);

}
else if(day > 0 && month == "June" && day < 21)
{
    console.log(true);
}
else{
    console.log(false);
    
}


//3. Write a program that takes a year as input and outputs the Year is a Leap Year or not a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless divisible by 400.

let year = parseInt(prompt("Enter the year"));

let leap = false; 

if(year % 4)
{
    if(year %100)
    {
        if(year%400)
        {
            leap = true;

        }
        else
        {
            leap = false;
        }
    }
    else
    {
        leap = false;
        
    }
    
}
else
{
    leap = false;
        
}
if(leap == false)
{
    console.log(year+` is a leap year`);
}
else
{
    
    console.log(year+` is not a leap year`);
}


//4. Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.

let randomOneDigitValue = Math.floor(Math.random()*2)

if(randomOneDigitValue == 0)
{
    console.log("Head")
}
else
{
    console.log("Tails")
    
}