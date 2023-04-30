let questions = [];
let currentQuestion = 0;
let points = 0;

// Cargar el archivo JSON
fetch("quiz.json")
  .then((response) => response.json())
  .then((data) => {
    questions = data;
    showQuestion();
  })
  .catch((error) => console.error(error));

// Mostrar una pregunta
function showQuestion() {
  let questionElement = document.getElementById("question");
  let answersElement = document.getElementById("answers");
  let question = questions[currentQuestion];

  // Mostrar la pregunta
  questionElement.innerHTML = question.question;

  // Mostrar las respuestas
  answersElement.innerHTML = "";
  for (let answer of question.answers) {
    let button = document.createElement("button");
    button.innerHTML = answer;
    button.addEventListener("click", () =>
    checkAnswer(answer, question.correct));
    answersElement.appendChild(button);
  }
  document.getElementById("progress").innerHTML = `Question ${
    currentQuestion + 1
  } of ${questions.length}`;
}

// Comprobar si la respuesta seleccionada es correcta y sumamos 1 punto
function checkAnswer(answer, correctAnswer) {
  if (answer === correctAnswer) {
    alert("Right answer!");
    points++;
    document.getElementById("points").innerHTML = `Score: ${points}`;
  } else {
    alert("Wrong answer...");
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
} else {
	document.getElementById('answers').innerHTML = '';
	document.getElementById('question').innerHTML = '';
	document.getElementById('progress').innerHTML = '';
	document.getElementById('answers').style.display = 'none';
	document.getElementById('question').style.display = 'none';
	document.getElementById('progress').style.display = 'none';
	}
}

