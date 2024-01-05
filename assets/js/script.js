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

// We have 4 Id and question, option-btn,next-button and info,  we will initiate these variables
const questionElement = document.getElementById("question");
const optionButtons = document.getElementById("option-btn");
const nextButton = document.getElementById("next-button");


// Setting up the variables to store the scores and the question index
let currentQuestionIndex = 0;
let score = 0;

/**
 * This function will strat the game 
 * Index of the question is 0 and score is also 0
 */

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

function infoAlert() {
    alert("This is a simple quiz for all the fans of Euro Cup 2024!! In total are 10 questions. We wish you luck!!");

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
        score++; // will increase the score if the option is correct
    } else {
        // will add the class name "is-false"
        selectedOption.classList.add("is-false");

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

function showScore() {
    resetQuestionAndAnswer();

    nextButton.innerHTML = "Restart";
    if (score === questions.length) {
        questionElement.innerHTML = `Congratulations!! <i class="fa-solid fa-medal fa-beat" style="color: #f0ea47;"></i> You won a ticket for Euro 2024!!`;
    } else {
        questionElement.innerHTML = `End of the Quiz! You have scored <i class="fa-solid fa-face-smile-wink" style="color: #d3a136;"></i> ${score} out of ${questions.length}!`;
    }

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
        showScore();
    }
}

/**
 * Function for the next button with event listener click
 */
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        // if there is no question, when we click on the button will restart the quiz
        startGame();
    }

});


startGame();