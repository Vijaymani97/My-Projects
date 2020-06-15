// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const MyScore = document.getElementById("MyScore");
const next = document.getElementById("next");
const back = document.getElementById("back");
let questions= [
{
question : "1.Which one is the largest district by areawise in Tamil Nadu?",
choiceA : "Vilupuram",
choiceB : "Erode",
choiceC : "CBE",
correct : "A"
},{
question : "2.Who is the Chief Minister of Tamil Nadu?",
choiceA : "OPS",
choiceB : "EPS",
choiceC : "Vijayakanth",
correct : "B"
},{
question : "3.Tamil Nadu has how many International Airports ?",
choiceA : "6",
choiceB : "2",
choiceC : "4",
correct : "C"
},{
question : "4.Tamil Nadu has how many districts?",
choiceA : "37",
choiceB : "28",
choiceC : "32",
correct : "A"
},{
question : "5.Who is the Prime Minister of India?",
choiceA : "Trumph",
choiceB : "Modi ",
choiceC : "Manmohan Singh",
correct : "B"
},{
question : "6.In which year, name Chennai from Madras was officially changed?",
choiceA : "1990",
choiceB : "2000",
choiceC : "1995",
correct : "C"
},{
question : "7.Total Number of Rajya Sabha seats in TamilNadu ?",
choiceA : "25",
choiceB : "17",
choiceC : "18",
correct : "C"
},{
question : "8.Which one is the largest district by population in Tamilnadu?",
choiceA : "Chennai",
choiceB : "Erode",
choiceC : "Krishnagiri",
correct : "A"
},{
question : "9.Which one is recognised as state fruit in Tamil Nadu?",
choiceA : "Banana",
choiceB : "JackFruit ",
choiceC : "Orange",
correct : "B"
},{
question : "10.Total number of Loksabha Constituencies in Tamilnadu?",
choiceA : "29",
choiceB : "20",
choiceC : "39",
correct : "C"
}
];
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let score = 0; 
// render a question
renderQuestion = () =>{
let q = questions[runningQuestion];
question.innerHTML = "<p>"+ q.question +"</p>";
choiceA.innerHTML = q.choiceA;
choiceB.innerHTML = q.choiceB;
choiceC.innerHTML = q.choiceC;
}
renderQuestion1 = () =>{
let q1 = questions[runningQuestion-1];
question.innerHTML = "<p>"+ q1.question +"</p>";
choiceA.innerHTML = q1.choiceA;
choiceB.innerHTML = q1.choiceB;
choiceC.innerHTML = q1.choiceC;
runningQuestion--;
}
start.addEventListener("click",startQuiz);
// start quiz
function startQuiz(){
start.style.display = "none";
renderQuestion();
quiz.style.display = "block";
renderProgress();
}
// render progress
renderProgress=()=>{
for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
}
} 
// checkAnwer
checkAnswer=(answer)=>{
if( answer == questions[runningQuestion].correct){
score++;
document.getElementById(runningQuestion).style.backgroundColor = "black";
}else{
document.getElementById(runningQuestion).style.backgroundColor = "black";
}
if(runningQuestion < lastQuestion){
runningQuestion++;
next.addEventListener("click", renderQuestion);
back.addEventListener("click", renderQuestion1); 
}else{  
alert("Do You want to Submit..?"+scoreRender());
}
}
// score render
scoreRender=()=>{
scoreDiv.style.display = "block";
const scorePerCent = Math.round(100 * score/questions.length);
MyScore.style.textAlign ="center";
document.getElementById("container").style.textAlign ="center";
document.getElementById("container").innerHTML= " your score is  "+scorePerCent;
}
