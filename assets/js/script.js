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
let questionElement = document.getElementById("question");
let optionButtons = document.getElementById("option-btn");
let nextButton = document.getElementById("next-button");
let correctSound = document.getElementById('goal-sound');
let incorrectSound = document.getElementById('nongoal-sound');
let gameOverSound = document.getElementById('gameover-sound');
let submittbtn = document.getElementById('submit-btn');


// Setting up the variables to store the scores and the question index
let currentQuestionIndex = 0;
let score = 0;
let userName;


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
        const welcomeMessage = document.createElement('h3');
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
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

/**
 * This function will show all the questions and options one by one 
 * will update also the question number
 * and will update the text
 */

function showQuestion() {

    resetQuestionAndAnswer();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    //the code that updates the answers

    currentQuestion.answers.forEach(answer => {

        let button = document.createElement("button");// creating a button element
        button.innerHTML = answer.option;

        button.classList.add("btn");   // adding a class to that button
        optionButtons.appendChild(button);   // display the button inside the div
        if (answer.value) {
            button.dataset.value = answer.value; // true or false will be added here 
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
 * This function shows the final page with the scores
 * it is added also a game over sound
 */

function showScore(userName) {
    resetQuestionAndAnswer();
    gameOverSound.play();
    nextButton.innerHTML = "Restart";

    // Create a table element
    const table = document.createElement('table');
    table.classList.add('score-table');

    // Create table rows and cells for each score information
    const headings = ['Name', 'Total Questions', 'Correct Answers', 'Wrong Answers', 'Final Score'];
    const userData = [userName, questions.length, score, questions.length - score, score];

    for (let i = 0; i < headings.length; i++) {
        const row = table.insertRow();
        const headingCell = row.insertCell();
        const dataCell = row.insertCell();

        headingCell.textContent = headings[i];
        dataCell.textContent = userData[i];
    }

    // Append the table to the questionElement
    questionElement.innerHTML = '';
    questionElement.appendChild(table);
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
       
        // Clear the welcome message
        welcomeSection.innerHTML = '';
        // Show the input field, submit button, and name label again
        userInput.style.display = 'block';
        nameLabel.style.display = 'block';
        submittbtn.style.display = 'block';
       
    }

});


startGame();
