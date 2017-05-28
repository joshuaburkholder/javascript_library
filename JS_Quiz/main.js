(function(){



const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

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
				`<div class="slide">
				<div class="question"> ${currentQuestion.question} </div>
				 <div class="answers">${answers.join('')} </div>
				 </div>`
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

function showSlide(n){
	slides[currentSlide].classList.remove('active-slide');
	slides[n].classList.add('active-slide');
	currentSlide = n;

	if(currentSlide === 0){
		previousButton.style.display = 'none';
	}
	else {
		previousButton.style.display = 'inline-block';
	}
	if(currentSlide === slide.length-1){
		nextButton.style.display = 'none';
		submitButton.style.display = 'inline-block';
	}
	else {
		nextButton.style.display = 'inline-block';
		submitButton.style.display = 'none';
	}
}

showSlide(0);

function showNextSlide(){
	showSlide(currentSlide + 1);
}

function showPreviousSlide(){
	showSlide(currentSlide - 1);
}

previousButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

//display quiz right away
buildQuiz();

//on submit, show results

submitButton.addEventListener('click', showResults);

})();
