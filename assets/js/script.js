// Adding a mixed array with objects
// Adding 10 questions for the quiz
const questions = [
    {
        question: "Where will EURO 2024 be held?",
        answers: [
            { option: "Greece", value: false },
            { option: "Italy", value: false },
            { option: "Germany", value: true },
            { option: "USA", value: false },
        ]
    },

    {
        question: "When is EURO 2024 scheduled to take place?",
        answers: [
            { option: "14 June - 30 June 2024", value: false },
            { option: "14 June - 5 July 2024", value: false },
            { option: "14 June - 15 July 2024", value: false },
            { option: "14 June - 14 July 2024", value: true },
        ]
    },
    {
        question: "Which from these countries is not qualified for the EURO 2024?",
        answers: [
            { option: "Albania", value: false },
            { option: "Croatia", value: false },
            { option: "Netherlands", value: false },
            { option: "Romania", value: true },
        ]
    },
    {
        question: "Where will the final take place?",
        answers: [
            { option: "BVB Stadion Dortmund", value: false },
            { option: "Düsseldorf Arena", value: false },
            { option: "Olympiastadion Berlin", value: true },
            { option: "Frankfurt Arena", value: false },
        ]
    },
    {
        question: "Which country won EURO 2008 cup?",
        answers: [
            { option: "Italy", value: false },
            { option: "Spain", value: true },
            { option: "Portugal", value: false },
            { option: "England", value: false },
        ]
    },
    {
        question: "How many times has Germany won the EURO cup?",
        answers: [
            { option: "5", value: false },
            { option: "4", value: false },
            { option: "3", value: true },
            { option: "2", value: false },
        ]
    },
    {
        question: "When and where was held the first European Football Championship?",
        answers: [
            { option: "Paris, 1960", value: true },
            { option: "London, 1954", value: false },
            { option: "Rome, 1956", value: false },
            { option: "Brussels, 1958", value: false },
        ]
    },
    {
        question: "Which from these countries never won the European Championship?",
        answers: [
            { option: "Greece", value: false },
            { option: "Denmark", value: false },
            { option: "Russia", value: false },
            { option: "Belgium", value: true },
        ]
    },
    {
        question: "In 1968 Italy won the final match against which country?",
        answers: [
            { option: "England", value: false },
            { option: "Soviet Union", value: false },
            { option: "Yugoslavia", value: true },
            { option: "Hungary", value: false },
        ]
    },
    {
        question: "How many nations compete at the European Championship?",
        answers: [
            { option: "20", value: false },
            { option: "22", value: false },
            { option: "26", value: false },
            { option: "24", value: true },
        ]
    },
];

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
const submittbtn = document.getElementById('submit-btn');

// Setting up the variables to store the scores and the question index
let currentQuestionIndex = 0;
let score = 0;
let userName;
let questionNo = 0;
let timer;
let timerValue = 15; // Initial timer value

 // Add event listener to the submit button
 submittbtn.addEventListener('click', function() {
    userName = userInput.value.trim();
    // Check if the user entered a name
    if (userName !== '') {
        // Hide the input and button
        startButton.style.display = 'block';
        userInput.style.display = 'none';
        this.style.display = 'none';
        nameLabel.style.display = 'none';
        // Display the welcome message
        let welcomeMessage = document.createElement('h3');
        welcomeMessage.textContent = `Welcome, ${userName}!`;
        welcomeSection.appendChild(welcomeMessage);
    } else {
        alert('Please enter your name.'); // Show an alert if the input is empty
        startButton.style.display = 'none';

    }
});

startButton.addEventListener("click", function() {
    startPage.style.display = "none";
    quizContent.style.display = "block";
    startGame(); // Start the quiz
    startTimer();
  });

  instructionsButton.addEventListener("click", function() {
    instructionsDiv.style.display = "block";
  });

  closeInstructionsButton.addEventListener("click", function() {
    instructionsDiv.style.display = "none";
  });

  /**
   * initializing the game by resetting some variables.
   */
  function startGame() {
    currentQuestionIndex = 0;
    questionNo = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    resetTimer(); // Reset timer when starting the game
    showQuestion();
    startTimer(); // Start the timer after displaying the question
}

// Function to update the timer display
function updateTimerDisplay() {
    document.getElementById("timer-value").textContent = timerValue;
}

// Function to start the timer for each question
function startTimer() {
    // Clear any existing timer
    clearTimeout(timer);
    // Start a new timer for 15 seconds
    timer = setInterval(function() {
        timerValue--;
        updateTimerDisplay();
        if (timerValue === 0) {
            handleTimeout();
        }
    }, 1000); // Update timer every second
}

/**
 * This function is handling what occurs when 
 * the time runs out during the quiz game.
 */
function handleTimeout() {
    if (quizContent.style.display === "block") {
        alert('Time is over! Restarting the game.');
    }
    startGame();
}

/**
 * This function is responsible for resetting 
 * the timer used in the quiz game
 */
function resetTimer() {
    // Clear the timer
    clearInterval(timer);
    timerValue = 15;
    updateTimerDisplay();
}

/**
 * This function will show all the questions and options one by one 
 * Will update also the question number
 * The questions will be filtered and appear randomly
 * and will update the text
 */

let askedQuestions = []; // Array to keep track of asked questions

function showQuestion() {
    // Clear previous question and answer displays
    resetQuestionAndAnswer();

    // Reset and start the timer for the current question
    resetTimer();
    startTimer();

    // Update the timer display
    updateTimerDisplay();

    // Check if all questions have been asked and reset if needed
    if (askedQuestions.length === questions.length) {
        askedQuestions = [];
    }

    // Filter out the questions that haven't been asked yet
    let remainingQuestions = questions.filter(question => !askedQuestions.includes(question));

    // Select a random question from the remaining pool
    let currentQuestionIndex = Math.floor(Math.random() * remainingQuestions.length);
    let currentQuestion = remainingQuestions[currentQuestionIndex];
    askedQuestions.push(currentQuestion); // Mark the question as asked

    // Update and display the question number and text
    questionNo++;
    questionElement.innerHTML = `${questionNo} out of ${questions.length}: ${currentQuestion.question}`;

    /**
     * this code was take from the youtube tutorial 
     * https://www.youtube.com/watch?v=PBcqGxrr9g8&t=770s
    */
    currentQuestion.answers.forEach(answer => {
        // Create a button for each answer option
        let button = document.createElement("button");
        button.innerHTML = answer.option;
        button.classList.add("btn");
        optionButtons.appendChild(button);

        // Assign a dataset value if the answer has a value property
        if (answer.value) {
            button.dataset.value = answer.value;
        }

        // Attach an event listener to handle when the option is selected
        button.addEventListener("click", selectOption);
    });
}
/**
 * This function will reset all the questions and answers
 */
function resetQuestionAndAnswer() {
    // Remove all child nodes of optionButtons
    optionButtons.innerHTML = '';
}

/**
 * When we will click on the buttons it will add the selected option on the variable 
 * and than it will check for the dataset values if it is true or not
 * This part of the code was taken from tutorial https://www.youtube.com/watch?v=PBcqGxrr9g8&t=770s
 */
function selectOption(event) {
    resetTimer(); // Reset timer when an option is selected
    const selectedOption = event.target;
    const isTrue = selectedOption.dataset.value === "true";

    // Apply styling and play sound based on correctness
    if (isTrue) {
        selectedOption.classList.add("is-true");
        selectedOption.style.backgroundColor = "#084F31";
        selectedOption.style.color = "#d8e8d2";
        correctSound.play();
        score++; // Increase the score if the option is correct
    } else {
        selectedOption.classList.add("is-false");
        selectedOption.style.backgroundColor = "#9E0E45";
        selectedOption.style.color = "#d8e8d2";
        incorrectSound.play();
    }

    // Disable all buttons after an option is selected
    Array.from(optionButtons.children).forEach(button => {
        // If the button is the correct answer, mark it as true
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
    const quizArea = document.querySelector('.quiz-area');
  
    // Clear the quiz area content
    quizArea.innerHTML = '';
    
    // Calculate the total score
    const totalScore = score * 10;
    
    // Determine the congratulatory message based on the total score
    let congratsMessage = "";
    if (totalScore === 100) {
        congratsMessage = "🎉 Congratulations! You won a ticket! 🎉";
    } else if (totalScore >= 80) {
        congratsMessage = "👍 Well done! You scored 80 points or more!";
    } else if (totalScore < 50) {
        congratsMessage = "😕 You scored less than 50 points. Better luck next time!";
    }

    // Create the result element
    const resultElement = document.createElement('div');
    resultElement.classList.add('quiz-result');

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

    // Add event listeners to restart and home buttons
    const restartButton = resultElement.querySelector("#restart-button");
    restartButton.addEventListener("click", handleRestart);

    const homeButton = resultElement.querySelector("#home-button");
    homeButton.addEventListener("click", handleHome);
}

// Function to handle quiz restart
function handleRestart() {
    // Reset the quiz
    startPage.style.display = "none";
    quizContent.style.display = "block";
    startGame(); // Restart the quiz
}

/**
 * It reloads the current page using window.location.reload(), 
 * effectively refreshing the page and returning the user to the home page.
 */
function handleHome() {
    window.location.reload();
}

/**
 * This function controls the progression of the quiz, 
 * moving from one question to the next until all questions have been answered.
 * inspired by youtube tutorial https://www.youtube.com/watch?v=PBcqGxrr9g8
 */

function handleNextButton() {
    resetTimer(); // Reset timer when moving to the next question
    // will increase the question index by 1
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();

    } else {
        showScore(userName);
    }
}

/**
 * This function handles the click event for the "Next" button
 */
function handleNextButtonClick() {
    if (currentQuestionIndex < questions.length) {
        // If there are more questions, move to the next question
        handleNextButton();
    } else {
        // If all questions have been answered, reset the quiz
        resetQuiz();
    }
}

// Attach the event listener to the "Next" button
nextButton.addEventListener("click", handleNextButtonClick);

// Function to reset the quiz
function resetQuiz() {
    // Show the start page
    startPage.style.display = "block";
    // Hide the quiz content
    quizContent.style.display = "none";
    // Reset question index and score
    currentQuestionIndex = 0;
    score = 0;
    // Show the input field, submit button, and name label again
    userInput.style.display = 'block';
    nameLabel.style.display = 'block';
    submittbtn.style.display = 'block';
    // Clear the welcome message
    welcomeSection.innerHTML = '';
}

startGame();
