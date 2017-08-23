//A closure gives you access ot the variables set in a function
//after the function has completed and returned.

//Helps keep variables from getting pushed into global scope.
//Degree of protection. Variables can't be overwritten.

var friend = {};

setAge = function(myAge) {

	var birthday = "2/20/1980";

	return {

		getAge : function() {
			return myAge;
		},

		getBirthday : function() {
			return this.birthday;
		}

		setBirthday : function(birthday) {
			this.birthday = birthday;
		}

	}
}


friend.age = setAge(36);

