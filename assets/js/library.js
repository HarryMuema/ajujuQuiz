function joinFunction(e) {
    e.preventDefault()
    document.querySelector('.bg-modal').classList.remove('d-none')
}

function closeJoinFunction(e) {
    e.preventDefault()
    document.querySelector('.bg-modal').classList.add('d-none')
}






function getTitle(e) {
    e.preventDefault()
    let searchTitle = document.getElementById('quizTitle').value
    localStorage.setItem('title', searchTitle)
    document.location.href = 'quiz.html'
}






















let quizes = [{
    title: 'marvel',
    content: [{
            question: 'Who is the villain in Guardians of the Galaxy: Vol 1?',
            answers: [
                { text: 'Thanos', correct: 'false' },
                { text: 'Ronan The Accuser', correct: 'true' },
                { text: 'Obidiah Stane', correct: 'false' },
                { text: 'Yondu Udonta', correct: 'false' }
            ]
        },
        {
            question: 'What type of scientist is Jane Foster in Thor?',
            answers: [
                { text: 'Astronomer', correct: 'true' },
                { text: 'Biologist', correct: 'false' },
                { text: 'Chemist', correct: 'false' },
                { text: 'Dioptrics', correct: 'false' }
            ]
        },
        {
            question: 'What does S.H.I.E.L.D stand for?',
            answers: [
                { text: 'Space Human Investigation on Energy, Light and Deities.', correct: 'false' },
                { text: 'Strategic Hero Intervention, Enforcement and Logistics Division', correct: 'false' },
                { text: 'Strategic Homeland Intervention, Enforcement and Logistics Division', correct: 'true' },
                { text: 'Stones Hidden In Extraterrestrial Lands and Demographics', correct: 'false' }
            ]
        },
        {
            question: 'What type of vehicle did Thanos briefly use in the comic books and make a brief appearance in the Loki series?',
            answers: [
                { text: ' A tank with “Infinity” written on it', correct: 'false' },
                { text: 'A helicopter with “Thanos” written on the side', correct: 'true' },
                { text: 'A car with “perfectly balanced” on the side', correct: 'false' },
                { text: 'A motorbike with “Titan” on the side', correct: 'false' }
            ]
        },
        {
            question: 'Ryan Reynolds acted in two Marvel movie series, one was the Deadpool movie series, the other was:',
            answers: [
                { text: 'Daredevil', correct: 'false' },
                { text: 'Captain America: Winter Soldier', correct: 'false' },
                { text: 'Blade', correct: 'true' },
                { text: 'Guardians of the galaxy', correct: 'false' }
            ]
        }
    ]
}]





export { quizes, getTitle, joinFunction, closeJoinFunction }