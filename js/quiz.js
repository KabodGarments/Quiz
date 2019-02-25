// selecting all elements via js
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions as arrays
let questions = [
    {
        question : "Q1. Meaning of NaN?",
        imgSrc : "img/js5.png",
        choiceA : "NaN means not a number but is actually considered a type of number",
        choiceB : "NaN means a number but is actually considered a type of number",
        choiceC : "NaN means not a number but is NOT actually considered a type of number",
        correct : "A"
    },{
        question : "Q2. numbers, strings, booleans, and undefined are data types?",
        imgSrc : "img/js3.png",
        choiceA : "Wrong",
        choiceB : "All except undefined",
        choiceC : "Correct",
        correct : "C"
    },{
        question : "Q3. What is JSFiddle?",
        imgSrc : "img/js2.jpeg",
        choiceA : "A JS operator",
        choiceB : "An online JS experimental tool or platform",
        choiceC : "A JS Data type",
        correct : "B"
    },{
        question : "Q4. Javascript is used for business logic code?",
        imgSrc : "img/js2.png",
        choiceA : "Wrong",
        choiceB : "Yes and also for User Interface",
        choiceC : "Correct",
        correct : "C"
    },{
        question : "Q5. Logical Operator && means?",
        imgSrc : "img/js4.png",
        choiceA : "both of these things must be true",
        choiceB : "either of these things may be true",
        choiceC : "Neither of these things may be true",
        correct : "A"
    }
];

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}
// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#24A931";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#FF0000";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";

    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);

    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";

    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}
$(document).ready(function() {
       $(".clickable").click(function() {
         $("#hint-showing").toggle();
         $("#hint-hidden").toggle();
       });
     });

$(document).ready(function() {
       $(".clickable").click(function() {
         $("#hint2-showing").slideDown();
         $("#hint2-hidden").slideUp();
       });
     });
