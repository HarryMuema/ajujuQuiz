import { quizes, closeJoinFunction, getTitle } from './library.js'
const joinButton = document.getElementById('join-quiz')
const closeJoin = document.querySelector('.close')
const joinLink = document.getElementById('join-btn')

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