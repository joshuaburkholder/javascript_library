//JSON is an acronymn for JavaScript Object Notation

var name = [["Sophie", "White Owl", "Orange Monster", "Captain"],["Little Owl", "Rubber Ring", "Pacifier Puppy"]];

var items = [
	{
		"id": 1,
		"name": "Green Door",
		"price": 12.50, 
		"tags": ["home", "green", "vinyl"]


	},
	{
		"id": 2,
		"name": "Red Door",
		"price": 12.50, 
		"tags": ["home", "red", "cheap wood"]
	},
	{
		"id": 3,
		"name": "Blue Door",
		"price": 15.50, 
		"tags": ["home", "blue", "fancy wood"]
	},
	{
		"id": 4,
		"name": "Orange Door",
		"price": 13.99, 
		"tags": ["home", "orange", "cheap metal"]
	}
]



for (i = 0; i < items.length; i++) {
	console.log(items[i].name);
};


