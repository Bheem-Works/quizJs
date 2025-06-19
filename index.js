// Importing all the elements class names and storing to the varaibles; 
// Let's create everything's by using the javascirpt. hahaha 

const questionsCounter = document.querySelector(".questionCounter");
const questions = document.querySelector(".questions");
const options = document.querySelector(".options");
const finalResult = document.querySelector(".result");
// You have to create a buttons with your self. hehe; 


// Let's makes some questions through the arrays. ;
const questionBank = [
  {questions:"What is the color of the sky?",
  questionsOption : ["sky","blue","yaamamoor"],
  answer:"blue"
  },
  {
  questions:"Who is the mc of the horimiya?",
  questionsOption:["hori","izumi","sota","snegokun"],
  answer:"hori"
  },
  {
    questions:"What is the most hated o/s?",
    questionsOption:["window","linux","mac"],
    answer:"window"
  }
]

// creating a chaning input varaibles for store the score and the currentQuestions; 
let currentQuestions = 0; 
let score = 0; 
const questionText = document.createElement('p');
questionText.style.color = "white";
questionText.style.fontSize = "20px";
questionsCounter.appendChild(questionText);

// Displaying the questions Bank to the questions varaibles
// by using the functions of const showOutput; 

function showQuestions() {
  // Question Counter sections; 
questionText.textContent = `Questions:${currentQuestions + 1}`; // Use the templete String to get the question numbers value; 

  // Qeustions show; 
  const questionsShow = questionBank[currentQuestions];
  questions.innerText = questionsShow.questions;
  options.innerHTML = " ";

  // Options show;
  questionsShow.questionsOption.forEach(option=> {
    const buttonElement = document.createElement("button");
    buttonElement.classList.add("selectButton");
    buttonElement.innerText = option;
   options.appendChild(buttonElement);
    buttonElement.addEventListener("click",selectOptions);
  })
}
function selectOptions(e) {
  const selected = e.target; 
  const answer = questionBank[currentQuestions].answer;
  console.log("answer",answer);
  if(selected.innerText === answer){
    score++;
  }
    currentQuestions++;

  if(currentQuestions < questionBank.length){
    showQuestions();
  } else {
    showResult();
  }
}

// Importing the audio. 
function showResult() {
  questions.innerHTML = "";
  options.innerHTML = "";
  questionText.innerHTML = "";
  const result = document.createElement('p');
  result.innerHTML = `<h1>Quiz completed </h1>
    <p>You score : ${score}/${questionBank.length} </p>
    <p>Bye! Sayanaro </p>`;
finalResult.appendChild(result);
  const audio = document.getElementById("bye");
  // Have to fix this , I have to render it to the screen; 
  audio.style.display = audio.style.display === "none" ? "block" : "none";
  audio.play();
}
showQuestions();
