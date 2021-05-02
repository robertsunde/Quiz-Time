// var firstQuestion = questions[0];
let timeRemaining = 60
var questions = [

    { 
      title: "How do you reference your JavaScript page in your html file?:",
      options: ["<script src=filenamehere></script>", "<link rel= href=filenamehere>", "You don't need to!", "./filenamehere"],
      answer: "<script src=filenamehere></script>"
    },
  
    {
      title: "How do you begin a for loop?",
      options: ["i=1-9", "(0<i<9)", "(i=0;i<9;i++)", "i++=i<9"],
      answer: "(i=0;i<9;i++)"
    },
  
    {
      title: "How do you create a comment in JavaScript?",
      options: ["//comment here", "<!--comment here-->", "|comment here|", " /comment here\ "],
      answer: "//comment here"
    },
  
    {
      title: "Does JavaScript depend on case sensitive language",
      options: ["Yes", "No", "Only on Tuesdays", "Definitely not"],
      answer: "Yes"
    },
  
    {
      title: "Which came first, JavaScript or Java?",
      options: ["Discovering water on Mars", "Java", "The chicken", "JavaScript"],
      answer: "Java"
    },
  
    {
      title: "Which HTML element is used to insert JavaScript?",
      options: ["<style>", "<main>", "<header>", "<script>"],
      answer: "<script>"
    },
  
  ]
  

function quizTime() {
var startscreen = document.getElementById("startscreen");
startscreen.setAttribute("id", "hide");

console.log(questions)

startQuestions();
};

function startQuestions() {

var startquiz = document.getElementById("hiddenquestions")
startquiz.removeAttribute("id");
// var questionText = document.getElementById("questionText");
// questionText.textContent = questions[0].title;

// var option1Text = document.getElementById("option1");
// option1Text.textContent = questions[0].options[0];

// var option2Text = document.getElementById("option2");
// option2Text.textContent = questions[0].options[1];

// var option3Text = document.getElementById("option3");
// option3Text.textContent = questions[0].options[2];

// var option4Text = document.getElementById("option4");
// option4Text.textContent = questions[0].options[3];




// questionone()
startTimer()
}




function startTimer() {
let timer = document.getElementById("timer")

let timerstart = setInterval(function() {
timeRemaining--;
timer.textContent = timeRemaining;

if(timeRemaining === 0) {
    clearInterval(timerstart);
    gameOver();
}


}, 1000)
}


function rightone() {
    console.log("win")
}

function wrongone() {
    console.log("lose")
    timeRemaining -= 7
}

function gameOver() {
    console.log("game over")
}