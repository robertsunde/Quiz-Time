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

startTimer()
questionone()
printHighscores()
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
    highscores()
}

function wrongsix() {
    console.log("lose")
    timeRemaining -= 7
    highscores()
}

function questionone() {
var startq = document.getElementById("hide1")
startq.removeAttribute("id");
}

function questiontwo() {
    var hideone = document.getElementById("next1");
hideone.setAttribute("id", "hide")
    var questiontwo = document.getElementById("hiddenquestions2")
    questiontwo.removeAttribute("id");
}

function questionthree() {
    var hidetwo = document.getElementById("next2");
hidetwo.setAttribute("id", "hide")
    var questionthree = document.getElementById("hiddenquestions3")
    questionthree.removeAttribute("id");
}

function questionfour() {
    var hidethree = document.getElementById("next3");
hidethree.setAttribute("id", "hide")
    var questionfour = document.getElementById("hiddenquestions4")
    questionfour.removeAttribute("id");
}

function questionfive() {
    var hidefour = document.getElementById("next4");
hidefour.setAttribute("id", "hide")
    var questionfive = document.getElementById("hiddenquestions5")
    questionfive.removeAttribute("id");
}

function questionsix() {
    var hidefive = document.getElementById("next5");
hidefive.setAttribute("id", "hide")
    var questionfive = document.getElementById("hiddenquestions6")
    questionfive.removeAttribute("id");
}

function highscores() {
    var hidesix = document.getElementById("next6");
hidesix.setAttribute("id", "hide")
    var highscore = document.getElementById("highscores")
    highscore.removeAttribute("id");

    
}


function savescore() {
    var initials = document.getElementById("nickname").value.trim();
    // determine whether characters were entered
    if (initials !== "") {
      // show high scores from local
      var highscores =
        JSON.parse(window.localStorage.getItem("highscorelist")) || [];
      // create new score storage for new user
      var newScore = {
        score: timeRemaining,
        initials: initials
      };
      // save highscores
      highscores.push(newScore);
      window.localStorage.setItem("highscorelist", JSON.stringify(highscores));
      
      window.location.href = "mainpage.html";

}}


function printHighscores () {
  
    // either get scores from localstorage or set to empty array
    var highscoreshow = JSON.parse(window.localStorage.getItem("highscorelist")) || [];
    // sort highscores by score property in descending order
    highscoreshow.sort(function(a, b) {
      return b.score - a.score;
    });
    highscoreshow.forEach(function(score) {
      // create li tag for each high score
      var liTag = document.createElement("li");
      liTag.textContent = score.initials + " - " + score.score;
      // display on page
      var olEl = document.getElementById("highscorelist");
      olEl.appendChild(liTag);
    });
  }










function gameOver() {
    console.log("game over")
}