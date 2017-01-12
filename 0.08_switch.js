/* switch Caseswitch (expression)
	if(test) {
	case 1:
	code;
	break;
	case 2:
	code;
	break;
	default:
	break;
	}
*/
var marginOfColtSuperBowlWin = 3;

var result


switch(marginOfColtSuperBowlWin) {
	case 3:
		result = "Cool, that will be a good game";
		break;
	case 7:
		result = "I like it. Just close enough.";
		break;
	case 10:
		result = "That's what I'm talking about.";
		break;
	default:
		result = "Sweet, we're awesome.";
		break;
	}

console.log ("switch result: " + result)

