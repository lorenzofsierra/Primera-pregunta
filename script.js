// script.js
let questions = [];

fetch('preguntas.json')
    .then(response => response.json())
    .then(data => {
        questions = data; // Guarda las preguntas cargadas desde el JSON
        loadRandomQuestion(); // Carga una pregunta aleatoria al inicio
    })
    .catch(error => console.error('Error al cargar las preguntas:', error));

let currentAnswer = "";

function loadRandomQuestion() {
    if (questions.length > 0) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        const randomQuestion = questions[randomIndex];
        document.getElementById('question-text').textContent = randomQuestion.question;
        currentAnswer = randomQuestion.answer;
        document.getElementById('user-answer').value = "";
        document.getElementById('result').textContent = "";
    } else {
        document.getElementById('question-text').textContent = "No hay preguntas disponibles.";
    }
}

function validateAnswer() {
    const userAnswer = document.getElementById('user-answer').value.trim();
    const resultElement = document.getElementById('result');

    if (userAnswer === currentAnswer) {
        resultElement.textContent = "¡Correcto!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Incorrecto. La respuesta correcta es: "+currentAnswer+ ".";
        resultElement.style.color = "red";
    }
}