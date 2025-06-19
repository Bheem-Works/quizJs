// Importing all the elements class names and storing to the varaibles; 
// Let's create everything's by using the javascirpt. hahaha 

const questionsCounter = document.querySelector(".questionCounter");
const questions = document.querySelector(".questions");
const options = document.querySelector(".options");
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

// Questions Count;
const questionText = document.createElement('p');
questionText.textContent = `Questions:${score}`; // Use the templete String to get the question numbers value; 
questionText.style.color = "white";
questionText.style.fontSize = "20px";
questionsCounter.appendChild(questionText);


// Displaying the questions Bank to the questions varaibles
// by using the functions of const showOutput; 

function showQuestions() {
  const questionsShow = questionBank[currentQuestions];
  questions.innerText = questionsShow.questions;
  // options.innerHTML = " ";

  questionsShow.questionsOption.forEach(option=> {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = option;
   options.appendChild(buttonElement);
    // buttonElement.addEventListener("click",selectOptions);
  })
}
showQuestions();
