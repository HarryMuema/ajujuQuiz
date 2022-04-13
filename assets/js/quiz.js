import { quizes } from "./library.js"
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionsContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerBtns = document.getElementById('answer-btns')



let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startGame() {

    startButton.classList.add('hide')
    shuffledQuestions = choosenQuiz.content.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0
    questionsContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(questions) {
    questionElement.innerText = questions.question
    questions.answers.forEach((answer, index) => {
        const button = document.createElement('button')
        button.innerText = answer.text
        if (index === 0) {
            button.classList.add('btn', 'btn-warning', 'w-100', 'my-2', 'py-3')
        } else if (index === 1) {
            button.classList.add('btn', 'btn-primary', 'w-100', 'my-2', 'py-3')
        } else if (index === 2) {
            button.classList.add('btn', 'btn-dark', 'w-100', 'my-2', 'py-3')
        } else {
            button.classList.add('btn', 'btn-secondary', 'w-100', 'my-2', 'py-3')
        }

        if (answer.correct == 'true') {
            button.dataset.correct = answer.correct
        }

        button.addEventListener('click', selectAnswer)
        answerBtns.appendChild(button)
    });
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerBtns.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove('hide')
    }
    nextButton.classList.remove('hide')
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct == "true") {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}



function findQuiz(myquiz, title) {
    let index = myquiz.findIndex(function(quiz, index) {
        return quiz.title.toLowerCase() === title.toLowerCase()
    })
    return myquiz[index]
}

const searchTitle = localStorage.getItem('title')

let setQuizes = JSON.parse(localStorage.getItem('quizList'))


let choosenQuiz = findQuiz(setQuizes, searchTitle)



console.log(quizes)





console.log(setQuizes)