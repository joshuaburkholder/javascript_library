(function(){



const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
	{
		question: "Who is the strongest?",
		answers: {
			a: "Superman",
			b: "The Terminator",
			c: "Waluigi (obviously!)"
		},

		correctAnswer: "b"
	},

	{
		question: "What is the best system ever created?",
		answers: {
			a: "Nintendo",
			b: "Atari",
			c: "X-Box"
		},

		correctAnswer: "c"
	},

	{
		question: "Where in the world is Waldo?",
		answers: {
			a: "Antarctica",
			b: "SItting in a tree",
			c: "On vacation with Carmen Sandiego"
		},

		correctAnswer: "a"
	}
]
 
function buildQuiz(){
	const output = [];

	myQuestions.forEach(
		(currentQuestion, questionNumber) => {
			const answers = [];

			for(letter in currentQuestion.answers){
				answers.push(
					`<label>
						<input type="radio" name="question${questionNumber}" value="${letter}">
						${letter} :
						${currentQuestion.answers[letter]}
					<label>`
						 );
			}

			output.push(
				`<div class="question"> ${currentQuestion.question} </div>
				 <div class="answers">${answers.join('')} </div>`
			);
		});

	quizContainer.innerHTML = output.join('');
}


function showResults(){

	const answerContainers = quizContainer.querySelectorAll('.answers');

	let numCorrect = 0;

	myQuestions.forEach( (currentQuestion, questionNumber) => {

		const answerContainer = answerContainers[questionNumber];
		const selector = 'input[name=question'+questionNumber+']:checked';
		const userAnswer = (answerContainer.querySelector(selector) || {}).value;

		if(userAnswer === currentQuestion.correctAnswer) {
			numCorrect++;
			answerContainers[questionNumber].style.color='lightgreen';
		}
		else{
			answerContainers[questionNumber].style.color = 'red';
		}

	});

	resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
}


//display quiz right away
buildQuiz();

//on submit, show results

submitButton.addEventListener('click', showResults);

})();
