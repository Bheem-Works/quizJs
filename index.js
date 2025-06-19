// Importing all the elements class names and storing to the varaibles; 
// Let's create everything's by using the javascirpt. hahaha 

const questionsCounter = document.querySelector(".questionCounter");
const questions = document.querySelector(".questions");
const options = document.querySelector("options");
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

// Questions Count;
const questionText = document.createElement('p');
questionText.textContent = `Questions`; // Use the templete String to get the question numbers value; 
questionText.style.color = "white";
questionText.style.fontSize = "20px";
questionsCounter.appendChild(questionText);


// Displaying the questions Bank to the questions varaibles
let list = document.createElement("p");
const mapingQuestions = questionBank.map((item,idx)=>{
  // Storing the item to the varaibles; 
  const storeItem = item; 
  list = storeItem; 
  // append it to the questions; 
  console.log(list);
  console.log(idx);
})

// test is it working or not? 
const test_list = document.createElement("li");
test_list.innerText = "This is the vim list";
questions.appendChild(test_list);
console.log("OutSideOfTheMap:",list);
