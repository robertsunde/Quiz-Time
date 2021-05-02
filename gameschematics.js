// var firstQuestion = questions[0];
let timeRemaining = 60
  

function quizTime() {
var startscreen = document.getElementById("startscreen");
startscreen.setAttribute("id", "hide");



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
    questiontwo()
}

function wrongone() {
    console.log("lose")
    timeRemaining -= 7
    questiontwo()
}

function righttwo() {
    console.log("win")
    questionthree()
}

function wrongtwo() {
    console.log("lose")
    timeRemaining -= 7
    questionthree()
}

function rightthree() {
    console.log("win")
    questionfour()
}

function wrongthree() {
    console.log("lose")
    timeRemaining -= 7
    questionfour()
}

function rightfour() {
    console.log("win")
    questionfive()
}

function wrongfour() {
    console.log("lose")
    timeRemaining -= 7
    questionfive()
}

function rightfive() {
    console.log("win")
    questionsix()
}

function wrongfive() {
    console.log("lose")
    timeRemaining -= 7
    questionsix()
}

function rightsix() {
    console.log("win")
    gameOver()
}

function wrongone() {
    console.log("lose")
    timeRemaining -= 7
    gameOver()
}

function questiontwo() {
    var hideone = document.getElementById("hiddenquestions");
hideone.setAttribute("id", "hidden");
    var questiontwo = document.getElementById("hiddenquestions2")
    questiontwo.removeAttribute("id");


}




function gameOver() {
    console.log("game over")
}