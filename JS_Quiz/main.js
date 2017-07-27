
(function() {
  const myQuestions = [
    {
      question: "What hymn is Martin Luther best known for having written?",
      answers: {
        a: "Amazing Grace",
        b: "Earth and All Stars",
        c: "A Mighty Fortress",
        d: "Alice's Restaraunt",        
      },
      correctAnswer: "c"
    },
    {
      question: "Which was NOT a watchword of the Lutheran Reformation?",
      answers: {
        a: "Grace Alone",
        b: "Tradition Alone",
        c: "Faith Alone",
        d: "Scripture Alone"
      },
      correctAnswer: "b"
    },
    {
      question: "The Confessions of the Lutheran Church are contained in:",
      answers: {
        a: "The Book of Genesis",
        b: "The Book of Mormon",
        c: "The Book of Concord",
        d: "The Lutheran Handbook"
      },
      correctAnswer: "c"
    },
    {
      question: "An indulgence was",
      answers: {
        a: "a note requesting to marry",
        b: "official minutes taken during a diet",
        c: "a dessert pastry made with lutefisk",
        d: "a paper alleged to offer forgiveness of sins (for the right price)"
      },
      correctAnswer: "d"
    }
  ];

  function buildQuiz() {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];

      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");

    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        answerContainers[questionNumber].style.color = "red";
      }
    });
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
 


