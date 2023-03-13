/*
//1. Use REPL – Random Function Math.floor(Math.random() * 10); to get Single Digit.
Use REPL – Use Random to get Dice Number between 1 to 6
3. Use REPL – Add two Random Dice Number and Print the Result
*/
let randomFunction = (Math.floor(Math.random()*6)+1)
console.log(randomFunction)


//4. Use Script & Debug – Write a program that reads 5 Random 2 Digit values , then find their sum and the average

let arr=[]

for(let i=0;i<5;i++)
{
    let randomTwoDigitValue =Math.floor(Math.random()*100)

    arr.push(randomTwoDigitValue)
}

//then find their sum and the average

let sum=0 ,ave=0;
for(let i=0;i<arr.length;i++){
    sum=sum+arr[i]
}
ave=(sum+ave)/arr.length

console.log("Sum is :"+sum)

console.log("Average is :"+ave)

//Use Script & Debug – Unit Conversion
//a
// feet to inch 

const prompt = require("prompt-sync")();
let feet = prompt("enter the feet : ")
console.log("feet to inch "+(feet*12))
let inch = prompt("enter the feet : ")
console.log("inch to feet "+(inch/12))
