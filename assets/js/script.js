const questions = [
    {
        question: "JavaScript is an _______ language?",
        options: ["A. Object-Oriented", "B. Object-Based", "C. Procedural", "D. None of them"],
        correctAnswer: "A. Object-Oriented"
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        options: ["A. var", "B. let", "C. Both A and B", "D. None of them"],
        correctAnswer: "C. Both A and B"
    },
    {
        question: "Which of the following methods is used to access HTML elements using JavaScript?",
        options: ["A. getElementById()", "B. getElementByClassName()", "C. Both A and B", "D. None of them"],
        correctAnswer: "C. Both A and B"
    },
    {
        question: "Upon encountering empty statements, what does the JavaScript Interpreter do?",
        options: ["A. Throw an error", "B. Ignores the statements", "C. Gives a warning", "D. None of them"],
        correctAnswer: "B. Ignores the statements"
    },
    {
        question: "Which of the following methods can be used to display data in some form using JavaScript?",
        options: ["A. document.write()", "B. console.log()", "C. windows.alert()", "D. All of them"],
        correctAnswer: "D. All of them"
  },
    {
        question: "What does CSS stand for?",
        options: ["A. Counter Strike: Source", "B. Corrective Style Sheet", "C. Computer Style Sheet", "D. Cascading Style Sheet"],
        correctAnswer: "D. Cascading Style Sheet"
    },
    {
        question: "Which HTML tag is used to define an unordered list?",
        options: ["A. <ol>", "B. <li>", "C. <ul>", "D. <list>"],
        correctAnswer: "C. <ul>"
    },
    {
        question: "What does the 'src' attribute in the <img> tag specify?",
        options: ["A. Source", "B. Style", "C. Syntax", "D. Image source"],
        correctAnswer: "D. Image source"
    },
    {
        question: "In JavaScript, what is a block of code that performs a specific task?",
        options: ["A. Function", "B. Variable", "C. Array", "D. Loop"],
        correctAnswer: "A. Function"
    },
    {
        question: "Which of the following is not a JavaScript data type?",
        options: ["A. String", "B. Boolean", "C. Float", "D. Integer"],
        correctAnswer: "C. Float"
    },
    {
        question: "What is the purpose of the 'else' statement in JavaScript?",
        options: ["A. To execute code if a condition is true", "B. To define a loop", "C. To execute code if a condition is false", "D. To declare a variable"],
        correctAnswer: "C. To execute code if a condition is false"
    },
    {
        question: "Which event is triggered when a user clicks on an HTML element?",
        options: ["A. onmouseover", "B. onblur", "C. onclick", "D. onchange"],
        correctAnswer: "C. onclick"
    },
    {
        question: "How do you declare a variable in JavaScript?",
        options: ["A. v variableName", "B. var variableName", "C. variableName = value", "D. declare variableName"],
        correctAnswer: "B. var variableName"
    },
    {
        question: "What does the '++' operator do in JavaScript?",
        options: ["A. Add one to a variable", "B. Subtract one from a variable", "C. Multiply a variable by two", "D. Divide a variable by two"],
        correctAnswer: "A. Add one to a variable"
    },
    {
        question: "Which built-in method removes the last element from an array and returns that element?",
        options: ["A. pop()", "B. push()", "C. join()", "D. slice()"],
        correctAnswer: "A. pop()"
    },
    {
        question: "What is the purpose of the 'localStorage' object in web development?",
        options: ["A. To store data on the server", "B. To store data locally in the user's browser", "C. To create animations", "D. To validate form inputs"],
        correctAnswer: "B. To store data locally in the user's browser"
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        options: ["A. text-color", "B. color", "C. font-color", "D. text-style"],
        correctAnswer: "B. color"
    },
    {
        question: "What does the acronym API stand for?",
        options: ["A. Application Programming Interface", "B. Advanced Programming Interface", "C. Application Program Integration", "D. Advanced Program Interaction"],
        correctAnswer: "A. Application Programming Interface"
    },
    {
        question: "In HTML, what does the <a> tag stand for?",
        options: ["A. Article", "B. Anchor", "C. Attribute", "D. Abbreviation"],
        correctAnswer: "B. Anchor"
    },
    {
        question: "Which of the following is not a valid color in CSS?",
        options: ["A. #FF0000", "B. rgb(255, 255, 255)", "C. green", "D. hsl(120, 100%, 50%)"],
        correctAnswer: "C. green"
    }
];

let currentQuestion = 0;
let score = 0;

let timer = null;
let seconds = 0;
let buttonsLocked = false;

function runTimer() {
    timer = setInterval(() => {
        seconds += 1;
        document.getElementById('timer').innerHTML = `${seconds} Seconds`;
    }, 1000)
}

// Function to start the quiz
function startQuiz() {
    // Hide the quiz guide and display the quiz container
    document.getElementById("guide-container").style.display = "none";
    document.getElementById("quiz-wrapper").style.display = "block";

    hideRestartButton(); // Initially hide the restart button
    showQuestion();
    runTimer();
}

// Function to restart the quiz
function restartQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    const resultContainer = document.getElementById("result-container");
    //const restartBtn = document.getElementById("restart-btn");

    quizContainer.style.display = "block";
    resultContainer.style.display = "none";

    // Reset variables
    currentQuestion = 0;
    score = 0;
    seconds = 0;

    // Start the quiz again
    startQuiz();
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
    const currentPageElement = document.getElementById("current-page");
    const totalPageElement = document.getElementById("total-pages");
    const currentQ = questions[currentQuestion];

    // Added numbering
    questionElement.textContent = `${currentQuestion + 1}. ${currentQ.question}`; 
    optionsContainer.innerHTML = "";

    currentQ.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = (event) => checkAnswer(option, event);
        button.classList.remove('red');
        optionsContainer.appendChild(button);
    });
    // Update page number
    currentPageElement.textContent = currentQuestion + 1;
    totalPageElement.textContent = questions.length;
}

// Function to check the selected answer
function checkAnswer(selectedOption, event) {
    if (buttonsLocked === true) {
        return false;
    }
    buttonsLocked = true;

    const currentQ = questions[currentQuestion];

    if (selectedOption === currentQ.correctAnswer) {
        score++;
    } else {
        event.target.classList.add('red');
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        setTimeout(() => { showQuestion(); buttonsLocked = false; }, 1000);
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
    const messageElement = document.getElementById("message");

    clearInterval(timer);

    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    scoreValue.textContent = score;

    // Display message based on score
    if (score >= 15) {
        messageElement.textContent = "Great job! You did well!";
    } else {
        messageElement.textContent = "You can do better. Keep practicing!";
    }

    // Always show the restart button at the end
    restartBtn.style.display = "block";
}

// Function to move to the next question
function nextQuestion() {
    const resultContainer = document.getElementById("result-container");
    const restartBtn = document.getElementById("restart-btn");

    if (currentQuestion < questions.length) {
       showQuestion();
    } else {
     showResult();
    }

    restartBtn.style.display = "none"; // Hide the restart button after moving to the next question
}

document.getElementById('restart-btn').addEventListener('click', () => {
    restartQuiz();
});

// Added an event listener for the start button
document.getElementById('start-btn').addEventListener('click', startQuiz);
