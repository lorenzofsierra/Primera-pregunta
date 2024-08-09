// script.js

const questions = [
    {
        question: "¿Cuál es la raíz cuadrada de 144?",
        answer: "12"
    },
    {
        question: "¿Qué es 7 x 8?",
        answer: "56"
    },
    {
        question: "¿Cuánto es 25 + 30?",
        answer: "55"
    },
    {
        question: "¿Cuál es el valor de Pi redondeado a dos decimales?",
        answer: "3.14"
    },
    {
        question: "Resuelve: 15 ÷ 3",
        answer: "5"
    },
    {
        question: "¿Qué es 12²?",
        answer: "144"
    },
    {
        question: "¿Cuál es el resultado de 9 - 4?",
        answer: "5"
    },
    {
        question: "¿Cuánto es 100 ÷ 4?",
        answer: "25"
    },
    {
        question: "¿Cuál es la suma de los ángulos de un triángulo?",
        answer: "180"
    },
    {
        question: "¿Qué es 2³?",
        answer: "8"
    }
];

let currentAnswer = "";

function loadRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];
    document.getElementById('question-text').textContent = randomQuestion.question;
    currentAnswer = randomQuestion.answer; // Guarda la respuesta correcta
    document.getElementById('user-answer').value = ""; // Limpia el campo de respuesta
    document.getElementById('result').textContent = ""; // Limpia el resultado
}

function validateAnswer() {
    const userAnswer = document.getElementById('user-answer').value.trim();
    const resultElement = document.getElementById('result');
    
    if (userAnswer === currentAnswer) {
        resultElement.textContent = "¡Correcto!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Incorrecto. La respuesta correcta es: " +currentAnswer+".";
        resultElement.style.color = "red";
    }
}

// Cargar una pregunta aleatoria al cargar la página
window.onload = loadRandomQuestion;