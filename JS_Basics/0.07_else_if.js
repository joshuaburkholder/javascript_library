/*
var age = 25;
if (age >= 21) {
	console.log("Proust!!");
} else if (age >= 18 ) {
	console.log("You can vote.");
} else if (age >= 25) {
	console.log("You can rent a car.")
} else {
	console.log("you can not drink.");
}
*/

var drink = "You can drink."
var vote = "You can vote."
var car = "You can rent a car."

var age = 12

if (age < 21 && age > 18) {
	console.log(vote)
} 
else if (age >= 21 && age < 25) {
	console.log(drink + vote)
} 
else if (age > 25) {
	console.log (drink + vote + car)
} else {
	console.log("You can drink juice.")
}


CHALLENGE: BRONZE
//expand upon our a simple login.
// create 2 variables 1 for your users username, 2 for the boolean condition then another to check if the user is an admin
// If login is true then print "You're Logged In!"
// If login is true and the user is a admin, print "This is the dashboard for your employee records you have master control"
// If Login is true and the user is a manager, print "This is the dashboard for your employee records, you can only read but not create users"
// If login is true and the user is a employee, print "clock in and clockout please" 
//Else if login is false then print "Please Sign In"



CHALLENGE: SILVER
/*
Create an if statement that has several conditions. Pretend that we will play four total games next year against the patriots.
 Deal with the Patriots record versus our record 

 In other words, if our record was better, talk some smack. If not, you should still talk some smack, but in 
 a different way. If the records were the same, talk some smack. 
 
 */

var coltsRecord = 0
var patriotRecord = 0
var coltsWin = true
var coltsLose = true

if(coltsWin) {
	return coltsRecord + 1;
} else {
	return patriotRecord + 1;
}

game 2

game 3

game 4



/*
COMPLETED ON REPLIT
CHALLENGE: GOLD

1. Write a program that prompts your users in the browser to enter a
number from 1 to 5 about how optimistic they are about the Colts next year.
2. Have a different response for each number. prompt.("How optimistic are you about the this year's Colts?") 
*/

var coltsChances = prompt("How optimistic are you about the this year's Colts?") 

switch(coltsChances) {
    case "1":
        text = "Oh, come on!";
        break;
    case "2":
        text ="Seriously??";
        break;
    case "3":
        text = "Because - defense!";
        break;
    case "4":
        text = "But will they get to the Division championships?";
        break;
    case "5":
        text = "Superbowl, here we come!";
        break;
    default:
        text = "Did I mention that you were suppose to use a number? Yea...";
        break;
}

var passwordAnswer = prompt("Please enter 123");

var loginResults = prompt("What is your role?")

if(passwordAnswer == 123) {
 
  switch(loginResults) {
    case "Admin":
        text = "This is the dashboard for your employee records you have master control.";
        break;
    case "Manager":
        text = "This is the dashboard for your employee records. You can read these.";
        break;
    case "Employee":
        text = "Clock in and clock out.";
        break;
    default:
        text = "Please sign in.";
        break;
  }

} else {
  alert("Im sorry. Go away.")
}

