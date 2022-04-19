import { quizes, closeJoinFunction, getTitle } from './library.js'
const joinButton = document.getElementById('join-quiz')
const closeJoin = document.querySelector('.close')
const joinLink = document.getElementById('join-btn')
const quiz1Btn = document.getElementById('button-1')
const quiz2Btn = document.getElementById('button-2')
const quiz3Btn = document.getElementById('button-3')
const quiz4Btn = document.getElementById('button-4')
const quiz5Btn = document.getElementById('button-5')
const quiz6Btn = document.getElementById('button-6')


document.addEventListener('DOMContentLoaded', () => {
    joinButton.addEventListener('click', (e) => {
        e.preventDefault()
        document.querySelector('.bg-modal').classList.remove('d-none')
        localStorage.setItem('quizList', JSON.stringify(quizes))
    })
})

document.addEventListener('DOMContentLoaded', () => {
    closeJoin.addEventListener('click', closeJoinFunction)
})

document.addEventListener('DOMContentLoaded', () => {
    joinLink.addEventListener('click', getTitle)
})

document.addEventListener('DOMContentLoaded', () => {
    quiz1Btn.addEventListener('click', (e) => {
        e.preventDefault()
        localStorage.setItem('title', 'harry potter')
        localStorage.setItem('quizList', JSON.stringify(quizes))
        document.location.href = 'quiz.html'
    })
})

document.addEventListener('DOMContentLoaded', () => {
    quiz2Btn.addEventListener('click', (e) => {
        e.preventDefault()
        localStorage.setItem('title', 'geography')
        localStorage.setItem('quizList', JSON.stringify(quizes))
        document.location.href = 'quiz.html'
    })
})

document.addEventListener('DOMContentLoaded', () => {
    quiz3Btn.addEventListener('click', (e) => {
        e.preventDefault()
        localStorage.setItem('title', 'html/css')
        localStorage.setItem('quizList', JSON.stringify(quizes))
        document.location.href = 'quiz.html'
    })
})

document.addEventListener('DOMContentLoaded', () => {
    quiz4Btn.addEventListener('click', (e) => {
        e.preventDefault()
        localStorage.setItem('title', 'locations')
        localStorage.setItem('quizList', JSON.stringify(quizes))
        document.location.href = 'quiz.html'
    })
})

document.addEventListener('DOMContentLoaded', () => {
    quiz5Btn.addEventListener('click', (e) => {
        e.preventDefault()
        localStorage.setItem('title', 'geometry')
        localStorage.setItem('quizList', JSON.stringify(quizes))
        document.location.href = 'quiz.html'
    })
})

document.addEventListener('DOMContentLoaded', () => {
    quiz6Btn.addEventListener('click', (e) => {
        e.preventDefault()
        localStorage.setItem('title', 'marvel')
        localStorage.setItem('quizList', JSON.stringify(quizes))
        document.location.href = 'quiz.html'
    })
})

console.log(quizes)