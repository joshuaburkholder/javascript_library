//variables with strings

var firstname = "joshua"
console.log(firstname);
var lastname = "burkholder"

//concatenation - this is how you build or combine strings -
console.log(firstname + " " +lastname);

//create a variable (fullname) to hold the formula for connecting strings (firstname, lastname)
var fullname = firstname + " " +lastname;
console.log(fullname);

//empty variables

//decarling a variable (unassigned)
var num
console.log(num); //returns undefined

var num
num = 2 // assigning a variable
console.log(num); //called & defined in separate line

//empty strings
var petsName = "" 
petsName = "gus"
console.log(petsName); //return gus

//camel-case: eachWordCapitalized
//snake-case: connected_by_underscore

/*
let 
//a variable assigner used functions
//example
if(true) {
	let petsName=""
}
console.log(petsName);
*/

//shorthand operators
var age = 55
/*
//1 + 1 = 2
console.log(1 += 1); // error: Invalid left-hand side in assignment
//console read '1 = 1 +1'
*/
console.log(age += 1); //reads age = age + 1
console.log(age /= 2); //divides by 2
console.log(age *= 2); 

/*
variables cannot begin with an integer nor a reserve words
var 2nite = "Wednesday Night"
*/

/*
//--------------------------------------------------------
// -------------- Challenge: Variables-----------
//--------------------------------------------------------
*/

/*
CHALLENGE: Bronze
Come up with five different variables. Think of 
real world uses for integers and create variables based on 
those things. A few examples might include: 
*/

var baseSalary = 39500 //base salary guidelines
var housingAllowance = (baseSalary * .3) //housing allowance computation
var ssOffset = (baseSalary+housingAllowance)*.0765 //offset for social security expense incurred
var definedCompensation = (baseSalary + housingAllowance + ssOffset) //total defined compensation

console.log(definedCompensation);

/*-----------------------------------------------------------

CHALLENGE: Silver
 Make a var called myNumber
//Set it to 0.
//Use shorthand to add 10 to it.
//Then use shorthand to subtract 1.
//Use shorthand to multiply by 9.
//Use shorthand to divide by 7.
//Just for practice, print myNumber to the console between each operation.
/*************************************************************
	 Operator ***** Example ***** Equivalent *****
    	+=		|    a += b   |    a = a + b   | 
    	-=		|    a -= b   |    a = a - b   | 
    	*=		|    a *= b   |    a = a * b   | 
    	/=		|    a /= b   |    a = a / b   | 
    	%=		|    a %= b   |    a = a % b   |   
              *****         *****            *****
*************************************************************/

/*-----------------------------------------------------------*/

var myNumber = 0
console.log(myNumber)
console.log(myNumber += 10);
console.log(myNumber -= 1);
console.log(myNumber *= 9);
console.log(myNumber /= 7);


//CHALLENGE: Gold
//Challenge #3 - Lifetime Supply
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount of glasses of water per day (as a number).
// Calculate how many glasses of water you would need for the rest of your life.
// Output the result to the screen like so: "You will need 5 million glasses to last you until the ripe old age of X".

var myAge = 36;
var maxAge = 84;
var estGlassesOfWaterPerDay = 4;
var myAnswer = (maxAge - myAge) * 365.25 *estGlassesOfWaterPerDay;
console.log( "You will need "myAnswer" glasses to last you until the ripe old age of" maxAge"."
	myAnswer);
