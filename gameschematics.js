// var firstQuestion = questions[0];
let timeRemaining = 60
  

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