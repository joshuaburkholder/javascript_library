var firstName = "Joshua"
var age = 55
var message = firstName + ": " + age
var test = false; 

console.log(message); //computes the string equation of variable named message
console.log(typeof age); //typeof indicates the kind of variable (string, number, boolean)
console.log(typeof message); //js recognizes the # 55 as part of a string
console.log(typeof	test); //returns boolean

/*************************** QUOTES *******************************/
//quotes: in js you can use either single or double quotes to indicate string value

var greetings = "How is your day?"
console.log(greetings);

var greetings = 'Kenn says "How\'s your day?"'  //you can use foward-slash [\] to use a quotation within a string without changing the type
console.log(greetings);

/********************** STRING METHODs *******************************/
//string methods: http://www.w3schools.com/jsref/jsref_obj_string.asp
console.log(greetings.length);        //will print the number of characters in the greetings variable-string
console.log(greetings.toUpperCase())
console.log(greetings.toLowerCase())
console.log(greetings.split(" "))     //turns strings and places them into arrays
console.log(greetings.slice(1))       //will remove everything up to an index number
var email = "generic@email.com"
console.log(email.split("@"));

// --------------  Challenge: Strings-------------

//Challenge: Bronze
//Write a string that has two variables. Output should be something like this:  I graduated from TooCoolForSchool High School in 1994.


var highSchool = "Grace"
var gradYear = 1998
var bronzeStatement = "I graduated from " + highSchool + " High School in " + gradYear + "."
console.log(bronzeStatement);

//Challenge: Silver
//Create one variable that holds a string that prints out three other variables. The three other //variables should be the make, model, and year of your car.
// “I drive a 1968 Chevy Impala.”
var autoYear = 2004
var autoMake = "Mitsubishi"
var autoModel = "Lancer"
var myCar = "I drive a " + autoYear + " " + autoMake + " " + autoModel + "."
console.log(myCar);

//Challenge: Gold
//Create a variable called age. Give the age a value. Use a conditional to check the age.
//If the age is 18, console.log('You are an adult'); If the age is less than 18, console.log('You are a minor');

var age = 105

if (age >= 18) {
	console.log("'You are and adult'")
}
else {
	console.log("'You are a minor'")
}
