const questions = [
    {
        question: "Javascript is an _______ language?",
        options: ["A. Object-Oriented", "B. Object-Based", "C. Procedural", "D. None of them"],
        correctAnswer: "A. Object-Oriented"
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        options: ["A. var", "B. let", "C. Both A and B", "D. None of them"],
        correctAnswer: "C. Both A and B"
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        options: ["A. getElementById()", "B. getElementByClassName()", "C. Both A and B", "D. None of them"],
        correctAnswer: "C. Both A and B"
    },
    {
        question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        options: ["A. Throw an error", "B. Ignores the statements", "C. Gives a warning", "D. None of them"],
        correctAnswer: "B. Ignores the statements"
    },
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        options: ["A. document.write()", "B. console.log()", "C. windows.alert()", "D. All of them"],
        correctAnswer: "D. All of them"
  }
];

let currentQuestion = 0;
let score = 0;

// Function to start the quiz
function startQuiz() {
    hideRestartButton();// Initially hide the restart button
    showQuestion();
}

// Function to restart the quiz
function restartQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    const resultContainer = document.getElementById("result-container");
    const restartBtn = document.getElementById("restart-btn");

    quizContainer.style.display = "block";
    resultContainer.style.display = "none";

    // Reset variables
    currentQuestion = 0;
    score = 0;

    // Start the quiz again
    showQuestion();
    hideRestartButton();
}

// Function to hide the restart button
function hideRestartButton() {
    const restartBtn = document.getElementById("restart-btn");
    restartBtn.style.display = "none";
}

// Function to display the current question and options
function showQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    const currentQ = questions[currentQuestion];

    questionElement.textContent = `${currentQuestion + 1}. ${currentQ.question}`; // Added numbering
    optionsContainer.innerHTML = "";

    currentQ.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

// Function to check the selected answer
function checkAnswer(selectedOption) {
    const currentQ = questions[currentQuestion];

    if (selectedOption === currentQ.correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Function to show the final quiz result
function showResult() {
    const quizContainer = document.getElementById("quiz-container");
    const resultContainer = document.getElementById("result-container");
    const scoreValue = document.getElementById("score-value");
    const restartBtn = document.getElementById("restart-btn");

    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    scoreValue.textContent = score;

    // Always show the restart button at the end
    restartBtn.style.display = "block";
    restartBtn.onclick = () => restartQuiz(); // Assign the onclick event to restart the quiz
}

// Function to move to the next question
function nextQuestion() {
    const quizContainer = document.getElementById("quiz-container");
    const resultContainer = document.getElementById("result-container");
    const restartBtn = document.getElementById("restart-btn");

    if (currentQuestion < questions.length) {
       showQuestion();
    } else {
     showResult();
    }
    
    restartBtn.style.display = "none"; // Hide the restart button after moving to the next question
}

// Start the quiz when the page is loaded
document.addEventListener("DOMContentLoaded", startQuiz);
