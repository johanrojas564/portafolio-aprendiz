/* ==================================================
   JAD - EVALUACIÓN DIAGNÓSTICA INICIAL

   Objetivo:
   Identificar conocimientos previos del estudiante
   en aritmética, geometría, álgebra y estadística.

   Este diagnóstico es orientativo y permite identificar
   áreas que pueden necesitar refuerzo.
================================================== */


/* ==================================================
   1. BANCO DE PREGUNTAS

   Para agregar o modificar preguntas, trabaja aquí.

   Cada pregunta contiene:
   - category: área matemática.
   - question: enunciado.
   - options: cuatro alternativas.
   - answer: índice de la respuesta correcta (0 a 3).
================================================== */

const questions = [

    // ARITMÉTICA: PREGUNTA 1
    {
        category: "Aritmética",
        question: "¿Cuánto es 72 dividido entre 8?",
        options: ["7", "8", "9", "10"],
        answer: 2
    },

    // ARITMÉTICA: PREGUNTA 2
    {
        category: "Aritmética",
        question: "¿Cuál es el resultado de sumar 1/2 + 1/4?",
        options: ["2/6", "3/4", "1/6", "2/4"],
        answer: 1
    },

    // ARITMÉTICA: PREGUNTA 3
    {
        category: "Aritmética",
        question: "Si tienes 2,50 y recibes 1,75 más, ¿cuánto dinero tienes en total?",
        options: ["3,25", "4,00", "4,25", "4,50"],
        answer: 2
    },

    // GEOMETRÍA: PREGUNTA 4
    {
        category: "Geometría",
        question: "Un rectángulo mide 8 cm de largo y 5 cm de ancho. ¿Cuál es su perímetro?",
        options: ["13 cm", "26 cm", "40 cm", "20 cm"],
        answer: 1
    },

    // GEOMETRÍA: PREGUNTA 5
    {
        category: "Geometría",
        question: "¿Cuál es el área de un rectángulo que mide 6 cm de largo y 4 cm de ancho?",
        options: ["10 cm²", "20 cm²", "24 cm²", "28 cm²"],
        answer: 2
    },

    // GEOMETRÍA: PREGUNTA 6
    {
        category: "Geometría",
        question: "¿Cuántos grados mide un ángulo recto?",
        options: ["45°", "90°", "180°", "360°"],
        answer: 1
    },

    // ÁLGEBRA: PREGUNTA 7
    {
        category: "Álgebra",
        question: "Observa la secuencia: 3, 6, 9, 12... ¿Cuál es el siguiente número?",
        options: ["13", "14", "15", "18"],
        answer: 2
    },

    // ÁLGEBRA: PREGUNTA 8
    {
        category: "Álgebra",
        question: "Si 2 × X + 3 = 11, ¿cuánto vale X?",
        options: ["3", "4", "5", "7"],
        answer: 1
    },

    // ESTADÍSTICA: PREGUNTA 9
    {
        category: "Estadística",
        question: "Las calificaciones de un estudiante son 4, 6, 8 y 10. ¿Cuál es el promedio?",
        options: ["6", "7", "8", "9"],
        answer: 1
    },

    // ESTADÍSTICA: PREGUNTA 10
    {
        category: "Estadística",
        question: "En el conjunto de datos 2, 3, 3, 4 y 5, ¿cuál es la moda?",
        options: ["2", "3", "4", "5"],
        answer: 1
    }

];


/* ==================================================
   2. VARIABLES DE CONTROL
================================================== */

// Índice de la pregunta actual.
let currentQuestion = 0;

// Aquí almacenamos las respuestas del estudiante.
// null significa que todavía no ha respondido.
let answers = new Array(questions.length).fill(null);


/* ==================================================
   3. ELEMENTOS HTML

   Conectamos JavaScript con los elementos de index.html.
================================================== */

const introScreen = document.getElementById("introScreen");
const quizScreen = document.getElementById("quizScreen");
const resultsScreen = document.getElementById("resultsScreen");

const startButton = document.getElementById("startButton");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");
const finishButton = document.getElementById("finishButton");
const restartButton = document.getElementById("restartButton");

const questionCategory = document.getElementById("questionCategory");
const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");

const optionsContainer = document.getElementById("optionsContainer");

const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");

const selectionMessage = document.getElementById("selectionMessage");


/* ==================================================
   4. INICIAR EVALUACIÓN
================================================== */

startButton.addEventListener("click", function () {

    introScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion();

});


/* ==================================================
   5. MOSTRAR PREGUNTA ACTUAL

   Esta función genera las opciones automáticamente
   dependiendo de la pregunta seleccionada.
================================================== */

function showQuestion() {

    const question = questions[currentQuestion];

    // Mostrar categoría y número.
    questionCategory.textContent = question.category.toUpperCase();

    questionNumber.textContent =
        "Pregunta " + (currentQuestion + 1);

    // Mostrar enunciado.
    questionText.textContent = question.question;

    // Limpiar las opciones anteriores.
    optionsContainer.innerHTML = "";

    // Crear las alternativas.
    question.options.forEach(function (option, index) {

        const label = document.createElement("label");

        label.className = "option";

        const radio = document.createElement("input");

        radio.type = "radio";
        radio.name = "answer";
        radio.value = index;

        // Recuperar selección anterior.
        radio.checked = answers[currentQuestion] === index;

        const text = document.createElement("span");

        text.textContent =
            String.fromCharCode(65 + index) + ". " + option;

        // Marcar opción seleccionada.
        if (radio.checked) {
            label.classList.add("selected");
        }

        // Guardar respuesta al seleccionar.
        radio.addEventListener("change", function () {

            answers[currentQuestion] = index;

            selectionMessage.textContent =
                "Respuesta seleccionada.";

            updateOptionsStyle();

        });

        label.appendChild(radio);
        label.appendChild(text);

        optionsContainer.appendChild(label);

    });

    updateProgress();
    updateNavigation();

    selectionMessage.textContent =
        answers[currentQuestion] !== null
            ? "Respuesta seleccionada."
            : "Selecciona una respuesta para continuar.";

}


/* ==================================================
   6. ACTUALIZAR ESTILO DE OPCIONES
================================================== */

function updateOptionsStyle() {

    const options =
        optionsContainer.querySelectorAll(".option");

    options.forEach(function (option) {

        const radio = option.querySelector("input");

        option.classList.toggle(
            "selected",
            radio.checked
        );

    });

}


/* ==================================================
   7. ACTUALIZAR PROGRESO
================================================== */

function updateProgress() {

    const total = questions.length;

    const position = currentQuestion + 1;

    progressText.textContent =
        "Pregunta " + position + "/" + total;

    const percentage =
        (position / total) * 100;

    progressFill.style.width =
        percentage + "%";

}


/* ==================================================
   8. CONTROLAR BOTONES DE NAVEGACIÓN
================================================== */

function updateNavigation() {

    // Ocultar anterior en la primera pregunta.
    previousButton.classList.toggle(
        "hidden",
        currentQuestion === 0
    );

    // Mostrar siguiente excepto en la última pregunta.
    nextButton.classList.toggle(
        "hidden",
        currentQuestion === questions.length - 1
    );

    // Mostrar finalizar únicamente en la última.
    finishButton.classList.toggle(
        "hidden",
        currentQuestion !== questions.length - 1
    );

}


/* ==================================================
   9. SIGUIENTE PREGUNTA
================================================== */

nextButton.addEventListener("click", function () {

    // Impedir avanzar sin responder.
    if (answers[currentQuestion] === null) {

        selectionMessage.textContent =
            "Primero debes seleccionar una respuesta.";

        return;

    }

    currentQuestion++;

    showQuestion();

});


/* ==================================================
   10. PREGUNTA ANTERIOR
================================================== */

previousButton.addEventListener("click", function () {

    if (currentQuestion > 0) {

        currentQuestion--;

        showQuestion();

    }

});


/* ==================================================
   11. FINALIZAR EVALUACIÓN

   Comprobar que todas las preguntas estén respondidas.
================================================== */

finishButton.addEventListener("click", function () {

    const unanswered = answers.findIndex(
        answer => answer === null
    );

    if (unanswered !== -1) {

        currentQuestion = unanswered;

        showQuestion();

        selectionMessage.textContent =
            "Esta pregunta todavía no tiene respuesta.";

        return;

    }

    calculateResults();

});


/* ==================================================
   12. CALCULAR RESULTADOS
================================================== */

function calculateResults() {

    // Crear estructura de resultados por área.
    const results = {

        "Aritmética": {
            correct: 0,
            total: 0
        },

        "Geometría": {
            correct: 0,
            total: 0
        },

        "Álgebra": {
            correct: 0,
            total: 0
        },

        "Estadística": {
            correct: 0,
            total: 0
        }

    };

    // Recorrer las preguntas y contar los aciertos.
    questions.forEach(function (question, index) {

        const category = question.category;

        results[category].total++;

        if (answers[index] === question.answer) {

            results[category].correct++;

        }

    });

    // Calcular puntuación general.
    const totalCorrect = questions.reduce(
        (sum, question, index) =>
            sum + (answers[index] === question.answer ? 1 : 0),
        0
    );

    // Mostrar resultado general.
    document.getElementById("totalScore").textContent =
        totalCorrect + "/" + questions.length;

    document.getElementById("scoreFill").style.width =
        (totalCorrect / questions.length * 100) + "%";

    // Mostrar resultados por categoría.
    showAreaResults(results);

    // Generar diagnóstico.
    generateDiagnosis(results);

    // Cambiar pantalla.
    quizScreen.classList.remove("active");

    resultsScreen.classList.add("active");

    // Actualizar consejos.
    document.getElementById("tipText").textContent =
        "¡Ya terminaste! Ahora podemos identificar " +
        "qué áreas matemáticas necesitan más atención.";

    document.getElementById("encouragementText").textContent =
        "¡Cada resultado es una oportunidad para aprender!";

}


/* ==================================================
   13. MOSTRAR RESULTADOS POR ÁREA
================================================== */

function showAreaResults(results) {

    const container =
        document.getElementById("areaResults");

    container.innerHTML = "";

    Object.entries(results).forEach(function ([area, data]) {

        const percentage =
            (data.correct / data.total) * 100;

        // Crear contenedor.
        const element = document.createElement("div");

        element.className = "area-result";

        // Encabezado.
        const header = document.createElement("div");

        header.className = "area-result-header";

        const name = document.createElement("strong");

        name.textContent = area;

        const score = document.createElement("span");

        score.textContent =
            data.correct + "/" + data.total;

        header.appendChild(name);
        header.appendChild(score);

        // Barra de resultados.
        const track = document.createElement("div");

        track.className = "area-result-track";

        const fill = document.createElement("div");

        fill.className = "area-result-fill";

        fill.style.width = percentage + "%";

        track.appendChild(fill);

        element.appendChild(header);
        element.appendChild(track);

        container.appendChild(element);

    });

}


/* ==================================================
   14. GENERAR DIAGNÓSTICO ORIENTATIVO

   Clasificación provisional:
   75% o más: fortaleza inicial.
   Menos de 75%: necesita refuerzo.

   NOTA:
   Con pocas preguntas por área, los resultados
   no son suficientes para emitir un diagnóstico
   académico definitivo.
================================================== */

function generateDiagnosis(results) {

    const strengths = [];

    const areasToImprove = [];

    Object.entries(results).forEach(function ([area, data]) {

        const percentage =
            (data.correct / data.total) * 100;

        if (percentage >= 75) {

            strengths.push(area);

        } else {

            areasToImprove.push(area);

        }

    });

    let message = "";

    if (strengths.length > 0) {

        message +=
            "Tus mejores resultados aparecen en: " +
            strengths.join(", ") + ". ";

    }

    if (areasToImprove.length > 0) {

        message +=
            "Conviene reforzar: " +
            areasToImprove.join(", ") + ". ";

    } else {

        message +=
            "Has obtenido buenos resultados en todas las áreas. ";

    }

    message +=
        "Este resultado es un punto de partida. " +
        "En las siguientes lecciones trabajaremos a tu ritmo " +
        "para fortalecer tus conocimientos.";

    document.getElementById("diagnosisText").textContent =
        message;

}


/* ==================================================
   15. REINICIAR EVALUACIÓN
================================================== */

restartButton.addEventListener("click", function () {

    // Borrar respuestas.
    answers = new Array(questions.length).fill(null);

    // Volver a la primera pregunta.
    currentQuestion = 0;

    // Ocultar resultados.
    resultsScreen.classList.remove("active");

    // Mostrar introducción.
    introScreen.classList.add("active");

    // Reiniciar progreso.
    progressText.textContent = "Pregunta 0/10";

    progressFill.style.width = "0%";

    // Restablecer consejos.
    document.getElementById("tipText").textContent =
        "No te preocupes si alguna pregunta parece difícil. " +
        "Responde con lo que sabes.";

    document.getElementById("encouragementText").textContent =
        "¡Confía en tus conocimientos!";

});