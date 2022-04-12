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
    console.log('started')
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

        if (answer.correct) {
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
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


let quizes = [{
    title: 'marvel',
    content: [{
            question: 'Who is the villain in Guardians of the Galaxy: Vol 1?',
            answers: [
                { text: 'Thanos', correct: false },
                { text: 'Ronan The Accuser', correct: true },
                { text: 'Obidiah Stane', correct: false },
                { text: 'Yondu Udonta', correct: false }
            ]
        },
        {
            question: 'What type of scientist is Jane Foster in Thor?',
            answers: [
                { text: 'Astronomer', correct: true },
                { text: 'Biologist', correct: false },
                { text: 'Chemist', correct: false },
                { text: 'Dioptrics', correct: false }
            ]
        },
        {
            question: 'What does S.H.I.E.L.D stand for?',
            answers: [
                { text: 'Space Human Investigation on Energy, Light and Deities.', correct: false },
                { text: 'Strategic Hero Intervention, Enforcement and Logistics Division', correct: false },
                { text: 'Strategic Homeland Intervention, Enforcement and Logistics Division', correct: true },
                { text: 'Stones Hidden In Extraterrestrial Lands and Demographics', correct: false }
            ]
        },
        {
            question: 'What type of vehicle did Thanos briefly use in the comic books and make a brief appearance in the Loki series?',
            answers: [
                { text: ' A tank with “Infinity” written on it', correct: false },
                { text: 'A helicopter with “Thanos” written on the side', correct: true },
                { text: 'A car with “perfectly balanced” on the side', correct: false },
                { text: 'A motorbike with “Titan” on the side', correct: false }
            ]
        },
        {
            question: 'Ryan Reynolds acted in two Marvel movie series, one was the Deadpool movie series, the other was:',
            answers: [
                { text: 'Daredevil', correct: false },
                { text: 'Captain America: Winter Soldier', correct: false },
                { text: 'Blade', correct: true },
                { text: 'Guardians of the galaxy', correct: false }
            ]
        }
    ]
}]

function findQuiz(myquiz, title) {
    let index = myquiz.findIndex(function(quiz, index) {
        return quiz.title.toLowerCase() === title.toLowerCase()
    })
    return myquiz[index]
}

let choosenQuiz = findQuiz(quizes, 'marvel')