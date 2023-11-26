const questions = [
    {
        question: "Javascript is an _______ language?",
        options: ["Object-Oriented", "Object-Based", "Procedural", "None of them"],
        correctAnswer: "Object-Oriented"
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        options: ["var", "let", "Both A and B", "None of them"],
        correctAnswer: "Both A and B"
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        options: ["getElementById()", "getElementByClassName()", "Both A and B", "None of them"],
        correctAnswer: "Both A and B"
    },
    {
        question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        options: ["Throw an error", "Ignores the statements", "Gives a warning", "None of them"],
        correctAnswer: "Ignores the statements"
    },
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        options: ["document.write()", "console.log()", "windows.alert()", "All of them"],
        correctAnswer: "All of them"
    }


];

let currentQuestion = 0;
let score = 0;

// Function to start the quiz
function startQuiz() {
    showQuestion();
}

// Function to display the current question and options
function showQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    const currentQ = questions[currentQuestion];

    questionElement.textContent = currentQ.question;
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

    quizContainer.style.display = "none";
    resultContainer.style.display = "block";

    scoreValue.textContent = score;
}
