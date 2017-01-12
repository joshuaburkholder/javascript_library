//Scopes

//variable assigned in the global context
var name = "kenn"; 

function greeting() {
	return "Hello, "+ name;	
}

console.log(greeting()); //returns "Hello, Ken"

//you can rename variables within the variable
//variable is reassigned in the func, instatiating a new var value

var name = "kenn"; 

function greeting() {
	var name = "ralph"
	return "Hello, "+ name	
}

console.log(greeting()); //prints "Hello, ralph"

//Hoisting

var name = "kenn"; 

function greeting() {
	var name = "ralph"
	random = "bread"
	return "Hello, "+ name	
}

console.log(random); //will print out "bread"
//Since "random" is not instatiated (by the use of var) within the formula,
//the variable "random" is initiated as a global variable.

var name = "kenn"; 
var random = "dough"


function greeting() {
	var name = "ralph"
	random = "bread"
	return "Hello, "+ name	
}

console.log(random); //will print out "dough"


