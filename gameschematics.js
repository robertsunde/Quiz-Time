// let firstQuestion = questions[0];
let timeLeft = 60


function quizTime() {
let startscreen = document.getElementById("startscreen");
startscreen.setAttribute("id", "hide");



startQuestions();
};

function startQuestions() {

let startquiz = document.getElementById("hiddenquestions")
startquiz.removeAttribute("id");

startTimer()
questionone()
printHighscores()
}




function startTimer() {
let timer = document.getElementById("timer")

let timerstart = setInterval(function() {
timeLeft--;
timer.textContent = timeLeft;

if(timeLeft <= 0) {
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
    timeLeft -= 7
    questiontwo()
}

function righttwo() {
    console.log("win")
    questionthree()
}

function wrongtwo() {
    console.log("lose")
    timeLeft -= 7
    questionthree()
}

function rightthree() {
    console.log("win")
    questionfour()
}

function wrongthree() {
    console.log("lose")
    timeLeft -= 7
    questionfour()
}

function rightfour() {
    console.log("win")
    questionfive()
}

function wrongfour() {
    console.log("lose")
    timeLeft -= 7
    questionfive()
}

function rightfive() {
    console.log("win")
    questionsix()
}

function wrongfive() {
    console.log("lose")
    timeLeft -= 7 
    questionsix()
}

function rightsix() {
    console.log("win")
    highscores()
}

function wrongsix() {
    console.log("lose")
    timeLeft -= 7
    highscores()
}

function questionone() {
let startq = document.getElementById("hide1")
startq.removeAttribute("id");
}

function questiontwo() {
    let hideone = document.getElementById("next1");
hideone.setAttribute("id", "hide")
    let questiontwo = document.getElementById("hiddenquestions2")
    questiontwo.removeAttribute("id");
}

function questionthree() {
    let hidetwo = document.getElementById("next2");
hidetwo.setAttribute("id", "hide")
    let questionthree = document.getElementById("hiddenquestions3")
    questionthree.removeAttribute("id");
}

function questionfour() {
    let hidethree = document.getElementById("next3");
hidethree.setAttribute("id", "hide")
    let questionfour = document.getElementById("hiddenquestions4")
    questionfour.removeAttribute("id");
}

function questionfive() {
    let hidefour = document.getElementById("next4");
hidefour.setAttribute("id", "hide")
    let questionfive = document.getElementById("hiddenquestions5")
    questionfive.removeAttribute("id");
}

function questionsix() {
    let hidefive = document.getElementById("next5");
hidefive.setAttribute("id", "hide")
    let questionfive = document.getElementById("hiddenquestions6")
    questionfive.removeAttribute("id");
}

function highscores() {
    let hidesix = document.getElementById("next6");
    hidesix.setAttribute("id", "hide")
    let hidesi = document.getElementById("finalscreen");
    hidesi.setAttribute("id", "hide")
    let highscore = document.getElementById("highscores")
    highscore.removeAttribute("id");

    
}


////////////////////////////////////////////////////////
/// FUNCTION TO SAVE SCORE ON BUTTON CLICK
////////////////////////////////////////////////////////

function savescore() {

    let nickname = document.getElementById("nickname").value.trim();
    if (nickname !== "") {
      let highscores =
        JSON.parse(window.localStorage.getItem("highscorelist")) || [];
      let newScore = {
        score: timeLeft,
        nickname: nickname
      };
      highscores.push(newScore);
      window.localStorage.setItem("highscorelist", JSON.stringify(highscores));
      window.location.href = "mainpage.html";
        
}}

function savedscorespage() {
    let startscreen = document.getElementById("startscreen");
      startscreen.setAttribute("id", "hide");
      highscores()
      printHighscores()

}


////////////////////////////////////////////////////////
/// CREATES LIST OF HIGH SCORES ON PAGE LOAD
////////////////////////////////////////////////////////

function printHighscores () {
    
    let highscoreshow = JSON.parse(window.localStorage.getItem("highscorelist")) || [];

    highscoreshow.forEach(function(score) {
      let divappend = document.createElement("div");
      divappend.textContent = score.nickname + " " + " " + " " + score.score;
      let mainlist = document.getElementById("highscorelist");
      mainlist.appendChild(divappend);
    });
  }



function gameOver() {
    console.log("game over")
    let timerstart = setInterval(function() {
        timeLeft--;
        timer.textContent = timeLeft;
        
        if(timeLeft <= 0) {
            clearInterval(timerstart);
        }})

        let hideany = document.getElementById("any");
        hideany.setAttribute("id", "hide")
        let gameover = document.getElementById("gameover")
        gameover.removeAttribute("id");


}