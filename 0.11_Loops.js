//indexing 1023456
//to access the index we use [] and the index number inside them
//DRY: Don't Repeat Yourself
//WET: Write Everything

var name = "James P."
console.log(name.length); 						//creates a little responsiveness
console.log(name[1]); 							//prints the letter 'a'
console.log(name[1]+name[3]+name[2]+" "); 		//prints "aem"
console.log(name[0].toLowerCase());				//prints lowercase j
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log(name[5]);
console.log(name[6]);

//Four type of loops: do while, while, for, for in
//LCV (Loop Control Variable)
//Here is an example of a while loop

var name = "Kenny G"
var lcv = 1;
while(lcv < 5){
	console.log(name.toUpperCase());
	lcv+= 1;
	}
//should print (condition - set value of lcv)times

//CHALLENGE - create a while loop that starts at i=0 and ends at 10; should print each number;

var count = 0

while(count <= 10) {
	console.log(count);
	count+=1;
}

