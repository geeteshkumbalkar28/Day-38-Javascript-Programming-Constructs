const prompt = require("prompt-sync")();

//1. Write a program that takes a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n till 256 is reached..
let num = parseInt(prompt("Enter the number"));
let i =1;
while(i!=11)
{
    console.log(num * i);
    i++;
}


//2. Find the Magic Number

var userInput = parseInt(prompt("Enter the number betweent 1 to 100"));
var start = 1;
var end = 100;
if(userInput >= start && userInput <= end){
    var mid = end/2;
    var ref = mid;
   while(userInput != mid ){
            if(userInput > mid){
                        start = mid;
                        mid = ((end + mid)/2) + 1;
            }
            if(userInput < mid){
                end = mid;
                mid = ((start + mid)/2) + 1;
        }
   }
   console.log("Your Number :: " + mid);
}else{
    console.log("Enter a valid number");
}



//3. Extend the Flip Coin problem till either Heads or Tails wins 11 times.


var hCounter=0,tCounter=0;
while(true)
{
    let randomOneDigitValue = Math.floor(Math.random()*2)
    if(randomOneDigitValue == 0)
    {
     
        hCounter++;
    }
    else
    {
        tCounter++;
    }
    if( hCounter == 11 || tCounter == 11)
    {
        break;
    }

}
if( hCounter == 11)console.log("Head win");
else console.log("Tail win");


//4 Write a Program where a gambler starts with Rs 100 and places Re 1 bet until he/she goes broke i.e. no more money to gamble or reaches the goal of Rs 200. Keeps track of number of times won and number of bets made.

var balance = 100;
const bet = 1;
var goal = 200;
var win = 0;
var lose = 0;

function putBet(){   
    var temp = Math.floor(Math.random()*10);
    if(temp%2 == 0){
        balance = balance + bet;
        win++;
    }else{
        balance = balance - bet;
        lose++;
    }
}

var ref = 1;
while(ref != 0){
    putBet();
    if(balance == 0) ref = 0;
    if(balance == 200) ref = 0; 
}
console.log("balance :: " + balance);
console.log("Wins :: " + win);
console.log(" Loses :: " + lose);