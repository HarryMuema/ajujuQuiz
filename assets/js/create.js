import { quizes, userQuizes } from './library.js'
const saveButton = document.getElementById('save-btn')
const doneButton = document.getElementById('done-btn')

const isCorrect = document.querySelectorAll('input[type="radio"]')


isCorrect.forEach(radio => {
    radio.addEventListener('click', () => {
        if (radio.checked == true) {
            radio.setAttribute('value', true)
        }
    })

})


let content = []

function saveContent(e) {
    e.preventDefault()
    let quizContent = {
        question: document.getElementById('question').value,
        answers: [{
                text: document.getElementById('answer-1').value,
                correct: document.getElementById('answer-1-radio').value
            },
            {
                text: document.getElementById('answer-2').value,
                correct: document.getElementById('answer-2-radio').value
            },
            {
                text: document.getElementById('answer-3').value,
                correct: document.getElementById('answer-3-radio').value
            },
            {
                text: document.getElementById('answer-4').value,
                correct: document.getElementById('answer-4-radio').value
            }
        ]
    }
    content.push(quizContent)
    document.querySelector('.question-form').reset()
    isCorrect.forEach(radio => {
        radio.setAttribute('value', false)
    })
}


function saveQuiz(e) {
    e.preventDefault()
    let quizContent = {
        question: document.getElementById('question').value,
        answers: [{
                text: document.getElementById('answer-1').value,
                correct: document.getElementById('answer-1-radio').value
            },
            {
                text: document.getElementById('answer-2').value,
                correct: document.getElementById('answer-2-radio').value
            },
            {
                text: document.getElementById('answer-3').value,
                correct: document.getElementById('answer-3-radio').value
            },
            {
                text: document.getElementById('answer-4').value,
                correct: document.getElementById('answer-4-radio').value
            }
        ]
    }
    content.push(quizContent)
    let quizData = {
        title: document.getElementById('title').value,
        content
    }
    quizes.push(quizData)
    document.querySelector('.question-form').reset()
    const titlequiz = document.querySelector('#title')
    titlequiz.value = ''
    isCorrect.forEach(radio => {
            radio.setAttribute('value', false)
        })
        // let oldData=userQuizes

    //save to local storage
    localStorage.setItem('quizList', JSON.stringify(quizes))

}

document.addEventListener('DOMContentLoaded', () => {
    saveButton.addEventListener('click', saveContent)
})

document.addEventListener('DOMContentLoaded', () => {
    doneButton.addEventListener('click', saveQuiz)
})

console.log(quizes)