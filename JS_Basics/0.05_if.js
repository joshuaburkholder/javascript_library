
var isOn = true //isLoggedIn, isLoggedOut; isSignedIn; etc.
var isHot = false

//if statements
if(isOn === false) {
	console.log("The light is on. It's too bright, man.");
}

//shorthand:
if(isOn){
	console.log("Dude, turn that music off.");
}

// && = and; || = "either/or"

if(isOn && isHot) {
	console.log("ouch.");
}

if(isOn || isHot) {
	console.log("There's no logical statement to make.")
}

if(!isHot) {
	console.log("It is not hot.")
}

