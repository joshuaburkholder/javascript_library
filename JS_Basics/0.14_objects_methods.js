//OBJECT LITERALS WITH METHODS
// methods are functions within an object

//you can use the "cookie cutter" object as a default object (or Parent Object)

var player = {
	//properties
	name: "", 
	life:  100,


	damage: function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
	},

	//methods
	challenge: function(){
		console.log(this.name +" says: "+"Would anyone care to fight?!?")
	},
	response:  function(){
		console.log(this.name + " says: " + "No, not really.");
	}, 
	attack: function(target) {
		console.log(this.name + " throws first  at " + target.name + " and does " + this.damage + " damage.")
	} 
};
}

melkor.name = "Melkor";

var melkor = Object.create(player);	

var miley = Object.create(player);
miley.name = "Miley";

//access methods

melkor.challenge();
miley.response();
melkor.attack(miley);

