// initiating these variables for all elements's id 
const userInput = document.getElementById('user-input');
const welcomeSection = document.getElementById('welcome-section');
const nameLabel = document.getElementById('name-label');
const startPage = document.getElementById("start-page");
const quizContent = document.getElementById("quiz-content");
const startButton = document.getElementById("start-button");
const instructionsButton = document.getElementById("instructions-button");
const instructionsDiv = document.querySelector(".instructions");
const closeInstructionsButton = document.getElementById("close-instructions");
const questionElement = document.getElementById("question");
const optionButtons = document.getElementById("option-btn");
const nextButton = document.getElementById("next-button");
const correctSound = document.getElementById('goal-sound');
const incorrectSound = document.getElementById('nongoal-sound');
const gameOverSound = document.getElementById('gameover-sound');
const submittbtn = document.getElementById('submit-btn');
const resultSection = document.getElementById("result-section");


// Setting up the variables to store the scores and the question index
let currentQuestionIndex = 0;
let score = 0;
let userName;
let questionNo = 0;

 // Add event listener to the submit button
 submittbtn.addEventListener('click', function() {
    // Get the value entered by the user
    userName = userInput.value.trim();
    // Check if the user entered a name
    if (userName !== '') {
        // Hide the input and button
        startButton.style.display = 'block'
        userInput.style.display = 'none';
        this.style.display = 'none';
        nameLabel.style.display = 'none'
        // Display the welcome message
        let welcomeMessage = document.createElement('h3');
        welcomeMessage.textContent = `Welcome, ${userName}!`;
        welcomeSection.appendChild(welcomeMessage);
    } else {
        alert('Please enter your name.'); // Show an alert if the input is empty
        startButton.style.display = 'none'

    }
});

startButton.addEventListener("click", function() {
    startPage.style.display = "none";
    quizContent.style.display = "block";
    startGame(); // Start the quiz
  });

  instructionsButton.addEventListener("click", function() {
    instructionsDiv.style.display = "block";
  });

  closeInstructionsButton.addEventListener("click", function() {
    instructionsDiv.style.display = "none";
  });

  function startGame() {
    currentQuestionIndex = 0;
    questionNo = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

/**
 * This function will show all the questions and options one by one 
 * will update also the question number
 * and will update the text
 */

let askedQuestions = []; // Array to keep track of asked questions

function showQuestion() {
    resetQuestionAndAnswer();

    // Check if all questions have been asked, reset if needed
    if (askedQuestions.length === questions.length) {
        askedQuestions = [];
    }

    let remainingQuestions = questions.filter(question => !askedQuestions.includes(question));
    let currentQuestionIndex = Math.floor(Math.random() * remainingQuestions.length);
    let currentQuestion = remainingQuestions[currentQuestionIndex];
    askedQuestions.push(currentQuestion);

    questionNo++;
    questionElement.innerHTML = `${questionNo} out of ${questions.length}: ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer.option;
        button.classList.add("btn");
        optionButtons.appendChild(button);
        if (answer.value) {
            button.dataset.value = answer.value;
        }
        button.addEventListener("click", selectOption);
    });
}
/**
 * this function will reset all the questions and answers
 */
function resetQuestionAndAnswer() {

    while (optionButtons.firstChild) {
        optionButtons.removeChild(optionButtons.firstChild);
    }
}

/**
 * When we will click on the buttons it will add the selected option on the variable 
 * and than it will check for the dataset values if it is true or not
 */
function selectOption(e) {
    const selectedOption = e.target;
    const isTrue = selectedOption.dataset.value === "true";
    if (isTrue) {
        // will add the class name "is-true"
        selectedOption.classList.add("is-true");
        // Will play a sound for the true answer
        correctSound.play();
        score++; // will increase the score if the option is correct
    } else {
        // will add the class name "is-false"
        // will play a sound for the false answer
        selectedOption.classList.add("is-false");
        incorrectSound.play();

    }

    /**
     * when we click an option, if it is false will search for the true one 
     * and will disable all the other button  */

    Array.from(optionButtons.children).forEach(button => {
        if (button.dataset.value === "true") {
            button.classList.add("is-true");
        }
        button.disabled = true;
    });


}

/**
 * This function handles displaying the quiz result 
 * along with options to restart or return to the home page.
 */

function showScore(userName) {
    // Select the quiz area
    let quizArea = document.querySelector('.quiz-area');
  
    // Clear the quiz area content
    quizArea.innerHTML = '';
    // Calculate the total score by multiplying the current score by 1
    let totalScore = score * 10;
  
    // Create a new element for the quiz result
    let resultElement = document.createElement('div');
    resultElement.classList.add('quiz-result');

    let congratsMessage = "";
    if (totalScore === 100) {
        congratsMessage = "🎉 Congratulations! You won a ticket! 🎉";
    } else if (totalScore >= 80) {
        congratsMessage = "👍 Well done! You scored 80 points or more!";
    } else if (totalScore < 50) {
        congratsMessage = "😕 You scored less than 50 points. Better luck next time!";
    }

    // Construct the result content
    resultElement.innerHTML = `
    <h2>Quiz Result</h2>
    <div id="congrats-message">${congratsMessage}</div>
    <table id="result-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>${userName}</th>
        </tr>
        <tr>
          <th>Correct Answers</th>
          <th>${score}</th>
        </tr>
        <tr>
          <th>Wrong Answers</th>
          <th>${questions.length - score}</th>
        </tr>
        <tr>
          <th>Total Score</th>
          <th>${totalScore}</th>
        </tr>
      </thead>
    </table>
      <button id="restart-button">Restart</button>
      <button id="home-button">Home</button>
    `;

    
    // Append the result element to the quiz area
    quizArea.appendChild(resultElement);
    let restartButton = document.getElementById("restart-button");
    
    restartButton.addEventListener("click", function() {
        // Reset the quiz
        startPage.style.display = "none";
        quizContent.style.display = "block";
        startGame(); // Restart the quiz
    });
    let homeButton = document.getElementById("home-button");
    homeButton.addEventListener("click", function() {
        // Go back to the home page
        window.location.reload();
    });
  }

/**
 * This function will handle the next button.
 * when there is no more question it will show the score
 */

function handleNextButton() {
    // will increase the question index by 1
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();

    } else {
        showScore(userName)
    }
}

/**
 * Function for the next button with event listener click
 */
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();

    } else {
        // Show the start page
        startPage.style.display = "block";
        // Hide the quiz content
        quizContent.style.display = "none";
        // Reset question index and score
        currentQuestionIndex = 0;
        score = 0;
        // Hide the next button
         // Show the input field, submit button, and name label again
         userInput.style.display = 'block';
         nameLabel.style.display = 'block';
         submittbtn.style.display = 'block';
        // Clear the welcome message
        welcomeSection.innerHTML = '';
       
       
    }

});


startGame();
