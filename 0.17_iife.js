//Immediately Invoked Functional Expression
//
//create a greeting function - take name parameter
//and it should print Hello + name...

var greeting = function(name){        //functional expression
	console.log("Hello " + name );
};

greeting("Chris");


//A parenthesis follwing the function tells JS to immediately
//run this function.

var greeting = function(name){        //functional expression
	console.log("Hello " + name );
}();


(function( value ){			//An anonymous function (no var name; just passing value)
	console.log(value)
})(15); 



var myIIFE = (function()){})();  //This is an IIFE;

var myIIFE = (function(){
	var privateVar = "secrets";

	return {
			reveal: function() {
				console.log( privateVar );
			}
	}
})();

