// Questions and answers in Array
const questions = [
    {
    question: ' Which country won the 2022 Fifa World Cup?',
    a: 'a. Portugal',
    b: 'b. Brazil',
    c: 'c. Argentina',
    d: 'd. France',
    answer: 'c. Argentina',
 },
 { 
    question: ' How many Super bowls have the New York Giants won?',
    a: '6',
    b: '1',
    c: '4',
    d: '7',
    answer: 'c',
}, 
{
    question: ' When was the last time the New York Knicks won a championship?',
    a: '1973',
    b: '1992',
    c: '1980', 
    d: '2011',
    answer:'a',
},
{
    question: ' Which NBA legend has the most rings?',
    a: 'Michael Jordan',
    b: 'Bill Rusell',
    c: 'Kobe Bryant',
    d: 'Brian Scalabrine',
    answer:'b',
},
{
    question: ' Which New York baseball team is the best?',
    a: 'Mets',
    b: 'Yankees',
    c: 'Red Sox',
    d: 'Dodgers',
    answer:'b',
    
},
 

];
// variables from HTML
let answers = document.querySelectorAll('.answer');
let nextButton = document.querySelector('.next')
let start = document.querySelector('.startButton');
let scoreText = document.querySelector("span");
let questionsIndex = 0;
let score = 0;

startGame();

function displayQuestion(){
    let newQuestion = document.querySelector(".container");
    newQuestion.innerHTML = "";
    let newQuestionText = `
    <div class="question">${questions[questionsIndex].question}</div>
    <div class="answer-container">
    <button class="answer 1"> ${questions[questionsIndex].a}</button>
    <button class="answer 2"> ${questions[questionsIndex].b}</button>
    <button class="answer 3"> ${questions[questionsIndex].c}</button>
    <button class="answer 4"> ${questions[questionsIndex].d}</button>
    </div>
    `;
    newQuestion.insertAdjacentHTML("beforeend", newQuestionText);   
    start.classList.add("hide");
    nextButton.classList.remove("hide");
    scoreText.classList.add("hide"); // added hide to cover the score 
}

function nextQuestion(){
    questionsIndex++;
    displayQuestion();
    nextButton.classList.remove("hide"); // It goes to the question 
}

// answers.forEach((answer) => {
//     answer.addEventListener('click', (e) => {
//         if (e.target.innerText === questions[0].answer) {
//             score++
//             console.log(score)
//             nextQuestion()
//         } else {
//             nextQuestion()
//         }
//     })
// })


function correctAnswer(){
   let userChoice = document.querySelector("questions[questionsIndex].answer").value
    if (userChoice === questions[questionsIndex].answer) {
        nextQuestion();
        score += 5
        scoreText.innerText = score
    } else {
        nextQuestion();
        score -= 1
        scoreText.innerText = score
    }
}

function startGame() {
    start.addEventListener('click', displayQuestion);
    nextButton.addEventListener('click', nextQuestion);

    let choices = document.querySelector(".answers")
    choices.addEventListener("click", correctAnswer);
}