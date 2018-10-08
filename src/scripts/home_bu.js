const btn = document.querySelector("button");
const correct = 0;
const BASEURL = "https://sampleapis.com/futurama/questions";
const game = {
    name: "",
    correct: 0,
    total: 0,
    currentQuestion: 0,
};

// cache your DOM
const start = document.getElementById("#btn__start");
const submit = document.getElementById("#btn__submit");
const retake = document.getElementById("#btn__retake");
const close = document.getElementById("#btn__close");

const question = document.querySelector('.question');
const answers = document.querySelector('.answer');

// const home = document.getElementByClassName(".home");
// const flashWrong = document.getElementByClassName(".flash__wrong");
// const flashCorrect = document.getElementByClassName(".flash__correct");
// const score = document.getElementByClassName(".score");

function setEventListeners() {
    //set listeners for various btns on the page
    start.addEventListener("click", btnStart);
    submit.addEventListener("click", btnSubmit);
    retake.addEventListener("click", btnRetake);
    close.addEventListener("click", btnClose);

    //call very last
};

function btnStart() {
    home.classList.add("hide");
    questions.classList.remove("hide");
};

function btnSubmit() {

};

function btnRetake() {
    questions.classList.add("hide");
    home.classList.remove("hide");
};

function btnClose() {

};

function startQuiz() {
    //reset correct score to 0
    //reset current question to 0
    //prompt for name
    //go get questions
};
function getQuestions() {
    //fetch from baseurl
    //convert to json
    //generate rand arr
    const max = arr.length - 1;
    const min = 8;
    const total = Math.floor(Math.random() * (max - min + 1) + min);

    const randArr = arr
        .sort(() => Math.random() > .5 ? -1 : 1)
        .filter((a, i) => i < total);

    fetch(BASEURL)
        .then(response => response.json())
        .then(data => {
            generateArray(data)
        })

    function generateArray(arr) {
        console.log(randArr[0]);
    }
};
function generateRandQuestions() {
    //randomize arr
    //get between 8 and length of arr
    //update total questions to num from above
    //display question
};
function displayQuestion() {
    question.innerHTML = articles.map(function (p) {
        console.log(p);
        return `<h1 class="question__header"></h1>
            <ol class="answers">
            <label for="ans1">
                <li><input id="ans1" type="radio" name="ans" val=""><span></span></li>
            </label>
            <label for="ans2">
                <li><input id="ans2" type="radio" name="ans" val=""><span></span></li>
            </label>
            <label for="ans3">
                <li><input id="ans3" type="radio" name="ans" val=""><span></span></li>
            </label>
            <label for="ans4">
                <li><input id="ans4" type="radio" name="ans" val=""><span></span></li>
            </label>
        </ol>
        `
    }).join("");

    //update DOM with current question
    //display possible answers that go with current question
};
function displayPossibleAnswers() {
    // fetch(BASEURL)
    //     .then(response => response.json())
    //     .then(data => {
    //         let answers = data.results.map((possibleAnswers) => {
    //             return{

    //             }
    //         })

    //     })

    //randomize possible answer arr
    //display randomized arr
};
function checkAnswer() {
    //select checked radio
    //compare radio val to correct ans on current question
    //true:
    //add 1 to correct
    //move on to next stage
    //false:
    //display correct ans
};
function displayCorrectAnswer() {
    //select radio with correct val
    //display correct graphic
    //wait n seconds
    //move to next stage
};
function endQuiz() {
    //display user score
    //congratulate if won
    //scold if lost
    //offer restart
    //if restart, invoke start quiz
};
function updateQuiz() {
    //check if current is greater than total
    //true:
    //end quiz
    //false:
    //update total,
    //update current question,
    //invoke displayQuestion
};





fetch(BASEURL)
    .then(response => response.json())
    .then(data => {
        generateArray(data)
        // let answers = data.results.map() => {
        //     return{

        //     }
        // }
    })

function generateArray(arr) {
    const max = arr.length - 1;
    const min = 8;
    const total = Math.floor(Math.random() * (max - min + 1) + min);

    const questionsArr = arr
        .sort(() => Math.random() > .5 ? -1 : 1)
        .filter((a, i) => i < total);


    console.log(questionsArr[0]);
}


