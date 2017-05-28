//  if/else

var elevatorUp = true;
var elevatorDown = true;
var elevatorOpen = true;
var elevatorBroken = true;
var evelevatorStuckAndWeAreOnIt = true;
var elevatorNumber = 13;


if(elevatorUp === true) {
	console.log("Going up");
} else {
	console.log("Going down");
}

// You don't have to have {} for one linke of code
if(elevatorUp) 
	console.log("Going up");

//Write one for elevatorBroken

if(elevatorBroken)
	console.log("Going doooooooooooooowwwwn.. .. . . .")

//--------------------------------------------------------
// ------------Challenges: If/Else Statements ----------
//--------------------------------------------------------

/*-----------------------------------------------------------*/
//CHALLENGE: Bronze

//WRITE YOUR OWN CONDITIONAL USING BOOLEANS AND LOGICAL OPERATORS.
   //Come up with a simple example

var happy = true
var knowIt = true
if(happy && knowIt) {
	console.log("Clap your hands.")
}

//Challenge: Silver
//Create a simple login console message.
// create 2 variables 1 for your users firstName, 2 for the boolean condition
// If login is true then print "You're Logged In!"
//Else if login is false then print "Please Sign In"

var firstName = "Bob"
var passwordCorrect = true

if(firstName == "Bob" && passwordCorrect == true) {
	console.log("You're Logged In!")
} else {
	console.log("Please Sign In")
}

//CHALLEGE: Gold
//Set up a var with bankAccount and a var with debt. Also set up a difference var.
//Do some logic to show whether or not you will pay off your debt or prints out a message if you have extra money.

var bankAccount = 100
var debt = 120
var difference = bankAccount - debt
var numberOfMonths = 12
var interestInc = bankAccount + ((bankAccount *= .02)* numberOfMonths)
var interestExp = debt + ((debt *= .05) * numberOfMonths)

var assets = bankAccount + interestInc
var liabilities = debt + interestExp

if (assets > liabilities) {
	console.log("You'll be rich one day.")
} else {
	console.log("You better hide.")
}

console.log(assets)
console.log(liabilities)
console.log(difference)

