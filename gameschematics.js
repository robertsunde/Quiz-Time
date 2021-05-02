


function quizTime() {
var startscreen = document.getElementById("startscreen");
startscreen.setAttribute("id", "hide");



startQuestions();
};

function startQuestions() {
var startquiz = document.getElementById("hiddenquestions")
startquiz.removeAttribute("id");

startTimer()
}

function startTimer() {
let timer = document.getElementById("timer")
let timeRemaining = 60
let timerstart = setInterval(function() {
timeRemaining--;
timer.textContent = timeRemaining;

if(timeRemaining === 0) {
    clearInterval(timerstart);
    gameOver();
}


}, 1000)
}

var questions = [
  { 
    question: "How do you reference your JavaScript page in your html file?:",
    options: ["<script src=filenamehere></script>", "<link rel= href=filenamehere>", "You don't need to!", "./filenamehere"],
    answer: "<script src=filenamehere></script>"
  },

  {
    question: "How do you begin a for loop?",
    options: ["i=1-9", "(0<i<9)", "(i=0;i<9;i++)", "i++=i<9"],
    answer: "(i=0;i<9;i++)"
  },

  {
    question: "How do you create a comment in JavaScript?",
    options: ["//comment here", "<!--comment here-->", "|comment here|", " /comment here\ "],
    answer: "//comment here"
  },

  {
    question: "Does JavaScript depend on case sensitive language",
    options: ["Yes", "No", "Only on Tuesdays", "Definitely not"],
    answer: "Yes"
  },

  {
    question: "Which came first, JavaScript or Java?",
    options: ["Discovering water on Mars", "Java", "The chicken", "JavaScript"],
    answer: "Java"
  },

  {
    question: "Which HTML element is used to insert JavaScript?",
    options: ["<style>", "<main>", "<header>", "<script>"],
    answer: "<script>"
  },

]



function gameOver() {
    console.log("game over")
}