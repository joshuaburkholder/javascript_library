// // // why do this? when you can use a function:
// // // console.log(greeting);
// // // console.log(greeting);
// // // console.log(greeting);
// // // console.log(greeting);
// // // console.log(greeting);

// // var num3 = 3
// // var num4 = 4
// // var num5 = 5
// // var numNeg = -10

// // // // functions with strings -

// // // function hello() {
// // // 	console.log("Hello World")
// // // }

// // // hello();

// // // var name = "Abby & Brian"

// // // this function below uses a variable; adding name as a parameter gives it more flexibility
// // // function greeting() {
// // // 	console.log("Good morning, " + name);
// // // }

// // // greeting();

// // //adding name as a parameter gives it more flexibility
// // function greeting(name) {
// // 	return ("Good morning, " + name);
// // }

// // greeting("Bob");
// console.log("00 / pp / oo")


// // // // functions with numbers -

// // // function printNumber() {
// // // 	console.log(1);
// // // }

// // // printNumber();


// // // function sumNum() {
// // // 	var num1 = 4;
// // // 	var num2 = 6;
// // // 	console.log(num2+num1);
// // // }

// // // sumNum();

// // // function multiplyNumbers() {
// // // 	return num3 * num4;
// // // }

// // // function divideNumbers () {
// // // 	return num5 / num3;
// // // }

// // // // function subNum() {
// // // // 	return num3 - num4;
// // // // }

// // // // multiplyNumbers();
// // // // divideNumbers();
// // // // subNum();

// // // // function multiplyNumbers(x, y) {
// // // // 	console.log(x*y);
// // // // }

// // // // function divideNumbers(x,z) {
// // // // 	console.log( x/z);	
// // // // }

// // // // multiplyNumbers(4,4);
// // // // divideNumbers(9,3);

// // // var addGreeting = greeting("Paul") + ". How are you doing today?";
// // // console.log(addGreeting);

// // // // original function needs to change console.log to return statement

// // // function calcPriceSalesTxIN (quantity, price) {
// // // 	sTax = 0.07
// // // 	var totalTax = quantity * price * sTax;
// // // 	var totalPrice = totalTax + quantity * price
// // // 	return totalPrice;
// // // }

// // // console.log(calcPriceSalesTxIN(17, 5));

// // // //Functions built into JS:
// // // Date();

// // // var today = new Date();
// // // console.log(today.toDateString());

// // //var d = new Date(YEAR, M(zero based month), ## (Date), HH (Hour24), MM (Min), Z (GMT -));
// // var d = new Date(2099, 1, 27, 14, 39, 5);

// // console.log(d.toString());     // logs Wed Jul 28 1993 14:39:07 GMT-0600 (PDT)
// // console.log(d.toDateString()); // logs Wed Jul 28 1993


// // function checkOdd(num) {
// // 	if (num%2 === 0) {
// // 		return "Yo dowag," + num + " is even."
// // } else {
// // 	return "nah dawg " + num + " is odd."
// //  }	
// // 	}

// // console.log(checkOdd(7));


// // function checkTres(num) {
// // 	if (num%3 === 0) {
// // 		return "Yo dowag," + num + " is divisible by three."
// // } else {
// // // 	return "nah dawg " + num + " is not."
// // //  }	
// // // 	}

// // // console.log(checkTres(9))
// // // console.log(checkTres(20))


// // //"side challenge": create a personalized greeting() for 2 names using an if statement

// // function greeting(name) 
// // {
// // 	if(name == "Paul") {
// // 		return "Hello, " + name; 
// // 	}
// // 	else if(name == "Bob") {
// // 		return "Hi, " + name;
// // 	}
// // 	else {
// // 		return "Keep walking, mister."
// // 	}

// // 	}
// // }

// // greeting (Paul);
// // greeting(Bob);
// // greeting(George);

// //CHALLENGES WITH FUNCTIONS ********************************************

// // //--------------------------------------------------------------
// // //--------------------------------------------------------------
// // // -------------- Challenge: Functions  ------------------
// // //--------------------------------------------------------------
// // //--------------------------------------------------------------

// // Write a function with two strings as parameters.
// // 		The function should concatenate the string.

// function stringFun(clause1, clause2) {
// 	console.log("clause1" + "clause2")
// }
// stringFun("gbc", "xyz");


// // Write a function that will help me easily calculate monthly bills.
// // util, phone, rent, food, water

// function monthlyBills(util, phone, food) {
// 	rent = 200
// 	water = 175
// 	return util+phone+food+rent+water
// }

// console.log(monthlyBills(100,100,100));


// // Write a function that takes quantity, price, tax and an item
// // The function should take the quantity, price, tax and the item name and return
// // a response similar to this.
// // --150 hotdogs will cost you $145 (your math may not be perfect and may
// //  potentially return 145.457.  If that is the case, don’t sweat it.

function totalCost(item, quantity, price) {
	if(item="Hot Dog") {
		return price = 1
	}
	
	else if(item="Hamburger") {
		return price = 2
	} else {
		console.log("Sorry, we're out of that. Please choose something else.")
	}
	CostForMore = price * quantity
	return CostForMore;
};


totalCost("Hot Dog", 4, 3);
console.log(totalCost("Hot Dog", 4, 2));

console.log(calcPriceSalesTxIN(100,.99));
