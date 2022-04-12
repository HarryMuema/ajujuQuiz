const saveButton = document.getElementById('save-btn')

const isCorrect = document.querySelectorAll('input[type="radio"]')

isCorrect.forEach(radio => {
    radio.addEventListener('click', () => {
        if (radio.checked == true) {
            radio.setAttribute('value', 'true')
        }
    })

})


let quiz = []

function saveQuiz(e) {
    e.preventDefault()
    let quizData = {
        title: document.getElementById('title').value,
        content: [{
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
        }]
    }
    quiz.push(quizData)
    document.querySelector('.question-form').reset()
}
console.log(quiz)

document.addEventListener('DOMContentLoaded', () => {
    saveButton.addEventListener('click', saveQuiz)
})