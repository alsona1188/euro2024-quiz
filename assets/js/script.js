// Adding a mixed array with objects
// Adding 10 questions for the quiz
const questions = [
    {
        question: "Where will EURO 2024 be held?",
        answers: [
            { option: "Germany", value: true },
            { option: "Italy", value: false },
            { option: "Greece", value: false },
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
            { option: "Albania", correct: false },
            { option: "Croatia", correct: false },
            { option: "Netherlands", correct: false },
            { option: "Romania", correct: true },
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
            { option: "Italy", correct: false },
            { option: "Spain", correct: true },
            { option: "Portugal", correct: false },
            { option: "England", correct: false },
        ]
    },
{
        question: "How many times has Germany won the EURO cup?",
        answers: [
            { option: "5", correct: false },
            { option: "4", correct: false },
            { option: "3", correct: true },
            { option: "2", correct: false },
        ]
    },
    {
        question: "When and where was held the first European Football Championship?",
        answers: [
            { option: "Paris, 1960", correct: true },
            { option: "London, 1954", correct: false },
            { option: "Rome, 1956", correct: false },
            { option: "Brussels, 1958", correct: false },
        ]
    },
    {
        question: "Which from these countries never won the European Championship?",
        answers: [
            { option: "Greece", correct: false },
            { option: "Denmark", correct: false },
            { option: "Russia", correct: false },
            { option: "Belgium", correct: true },
        ]
    },
    {
        question: "In 1968 Italy won the final match against which country?",
        answers: [
            { option: "England", correct: false },
            { option: "Soviet Union", correct: false },
            { option: "Yugoslavia", correct: true },
            { option: "Hungary", correct: false },
        ]
    },
    {
        question: "How many nations compete at the European Championship?",
        answers: [
            { option: "20", correct: false },
            { option: "22", correct: false },
            { option: "26", correct: false },
            { option: "24", correct: true },
        ]
    },
];