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

// We have 3 Id and question, option-btn and next-button, we will initiate these variables
const questionElement = document.getElementById("question");
const optionButtons = document.getElementById("option-btn");
const  nextButton = document.getElementById("next-button");
const ruleButton = document.getElementById("info");

// Setting up the variables to store the scores and the question index
let currentQuestionIndex = 0;
let score = 0; 

/**
 * This function will strat the game 
 * Index of the question is 0 and score is also 0
 */

function startGame(){
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

function showQuestion(){

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
            button.dataset.value = answer.value;
        }
    });
}
/**
 * this function will reset all the questions and answers
 */
function resetQuestionAndAnswer(){

while (optionButtons.firstChild) {
    optionButtons.removeChild(optionButtons.firstChild);
  }
}

function infoAlert(){
    alert("This is a simple quiz for all the fans of Euro Cup 2024!! In total are 10 questions. We wish you luck!!");

}

startGame();