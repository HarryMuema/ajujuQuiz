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
            },
            {
                question: 'In which order are the Infinity Stones revealed in the Marvel Cinematic Universe?',
                answers: [
                    { text: 'Time Stone, Space Stone, Power Stone, Soul Stone, Reality Stone and Mind Stone', correct: 'false' },
                    { text: ' Power Stone, Reality Stone, Time Stone, Space Stone, Mind Stone and Soul Stone', correct: 'false' },
                    { text: 'Reality Stone, Time Stone, Mind Stone, Soul Stone, Power Stone and Space Stone', correct: 'false' },
                    { text: 'Space Stone, Mind Stone, Reality Stone, Power Stone, Time Stone and Soul Stone', correct: 'true' }
                ]
            },
            {
                question: 'During which war did Captain America get his superhuman abilities?',
                answers: [
                    { text: 'Civil War', correct: 'false' },
                    { text: ' World War I', correct: 'false' },
                    { text: 'Worlds War II', correct: 'true' },
                    { text: ' The Cold War', correct: 'false' }
                ]
            },
            {
                question: 'What is the name of Peter Quill’s home planet?',
                answers: [
                    { text: ' Mordor', correct: 'false' },
                    { text: ' Goddricks Hollow', correct: 'false' },
                    { text: 'Earth', correct: 'true' },
                    { text: 'Morag', correct: 'false' }
                ]
            },
            {
                question: 'Which of the following characters did not disappear during the ”blip”?',
                answers: [
                    { text: 'Spiderman', correct: 'false' },
                    { text: ' Black Panther', correct: 'false' },
                    { text: 'Doctor Strange', correct: 'false' },
                    { text: 'Rocket', correct: 'true' }
                ]
            },
            {
                question: 'Which actor played Eddie Brock in Venom (2018)?',
                answers: [
                    { text: 'Tom Holland', correct: 'false' },
                    { text: ' Tom Hardy', correct: 'true' },
                    { text: 'Tom Hiddleston', correct: 'false' },
                    { text: 'Tom Hanks', correct: 'false' }
                ]
            }
        ]
    }, {

        title: 'harry potter',
        content: [{
                question: 'What spell did Harry use to kill Lord Voldemort?',
                answers: [
                    { text: 'Expelliarmus', correct: 'true' },
                    { text: 'Expecto Patronum', correct: 'false' },
                    { text: 'Avada Kedavra', correct: 'false' },
                    { text: 'Accio', correct: 'false' }
                ]
            },
            {
                question: 'At the first meeting of the Duelling Club, Draco Malfoy summoned what animal with the spell ‘Serpensortia’?',
                answers: [
                    { text: 'Frog', correct: 'false' },
                    { text: 'Snake', correct: 'true' },
                    { text: 'Dragon', correct: 'false' },
                    { text: 'Bear', correct: 'false' }
                ]
            },
            {
                question: '“It’s Levi-O-sa, not…”',
                answers: [
                    { text: 'Levi-o-SA', correct: 'true' },
                    { text: 'LEVI-o-sa', correct: 'false' },
                    { text: '', correct: 'false' },
                    { text: '', correct: 'false' }
                ]
            },
            {
                question: 'Which element is associated with Hufflepuff?',
                answers: [
                    { text: 'Fire', correct: 'false' },
                    { text: 'Earth', correct: 'true' },
                    { text: 'Air', correct: 'false' },
                    { text: 'Water', correct: 'false' }
                ]
            },
            {
                question: 'What was the name of the Black family’s house elf?',
                answers: [
                    { text: 'Dobby', correct: 'false' },
                    { text: 'Winky', correct: 'false' },
                    { text: 'Kreacher', correct: 'true' },
                    { text: 'Hokey', correct: 'false' }
                ]
            },
            {
                question: 'What is a thestral?',
                answers: [
                    { text: 'A half-giant', correct: 'false' },
                    { text: ' An invisible winged horse', correct: 'true' },
                    { text: 'A shrunken head', correct: 'false' },
                    { text: 'A pixie', correct: 'false' }
                ]
            },
            {
                question: 'What was the name of the animal that acted as the snitch in early Quidditch games?',
                answers: [
                    { text: 'Golden Snackett', correct: 'false' },
                    { text: ' Golden Stonch', correct: 'false' },
                    { text: 'Golden Steen', correct: 'false' },
                    { text: ' Golden Snidget', correct: 'true' }
                ]
            },
            {
                question: 'When unearthed, a mandrake will do what?',
                answers: [
                    { text: ' Dance', correct: 'false' },
                    { text: ' Burp', correct: 'false' },
                    { text: 'Scream', correct: 'true' },
                    { text: 'Laugh', correct: 'false' }
                ]
            },
            {
                question: 'Cedric Diggory faced what breed of dragon in the Triwizard Tournament?',
                answers: [
                    { text: 'Swedish Short-Snout', correct: 'true' },
                    { text: ' Peruvian Vipertooth', correct: 'false' },
                    { text: 'Common Welsh Green', correct: 'false' },
                    { text: 'Norwegian Ridgeback', correct: 'false' }
                ]
            },
            {
                question: 'The tears of which animal are the only known antidote to basilisk venom?',
                answers: [
                    { text: 'Phoenix', correct: 'true' },
                    { text: ' Billywig', correct: 'false' },
                    { text: 'Hippogriff', correct: 'false' },
                    { text: 'Boggart', correct: 'false' }
                ]
            }
        ]
    }, {

        title: 'html/css',
        content: [{
                question: 'An HTML document can contain _____',
                answers: [
                    { text: 'Attributes', correct: 'false' },
                    { text: ' Tags', correct: 'false' },
                    { text: 'Raw text', correct: 'false' },
                    { text: 'All the answers are true', correct: 'true' }
                ]
            },
            {
                question: 'A page designed in HTML is called _____',
                answers: [
                    { text: ' Application', correct: 'false' },
                    { text: ' Cover page', correct: 'false' },
                    { text: ' Front-end', correct: 'false' },
                    { text: 'Web Page', correct: 'true' }
                ]
            },
            {
                question: 'The HTML document contains a root tag called ____',
                answers: [
                    { text: 'HEAD', correct: 'false' },
                    { text: 'Title', correct: 'false' },
                    { text: 'Body', correct: 'false' },
                    { text: ' HTML', correct: 'true' }
                ]
            },
            {
                question: 'If we want to place text around an image, which CSS property should we use?',
                answers: [
                    { text: 'push', correct: 'false' },
                    { text: 'float', correct: 'true' },
                    { text: 'align', correct: 'false' },
                    { text: 'wrap', correct: 'false' }
                ]
            },
            {
                question: 'Can we align an element by setting margin-left and margin-right?',
                answers: [
                    { text: 'Yes it’s possible.', correct: 'false' },
                    { text: 'No, it’s not possible.', correct: 'true' },
                    { text: '', correct: 'false' },
                    { text: '', correct: 'false' }
                ]
            },
            {
                question: 'Suppose we want to arrange three DIVs so that DIV 3 is placed above DIV1. Now, which CSS property are we going to use to control the stack order?',
                answers: [
                    { text: ' d-index', correct: 'false' },
                    { text: ' s-index', correct: 'false' },
                    { text: 'x-index', correct: 'false' },
                    { text: ' z-index', correct: 'true' }
                ]
            },
            {
                question: 'Choose the correct HTML tag for a large title.',
                answers: [
                    { text: 'H1', correct: 'true' },
                    { text: '  Heading', correct: 'false' },
                    { text: 'Head', correct: 'false' },
                    { text: ' H6', correct: 'false' }
                ]
            },
            {
                question: 'If we want to use a nice green dotted border around an image, which css property are we going to use?',
                answers: [
                    { text: ' border-line', correct: 'false' },
                    { text: ' border-style', correct: 'true' },
                    { text: ' border-decoration', correct: 'false' },
                    { text: ' border-color', correct: 'true' }
                ]
            },
            {
                question: 'An HTML document is saved with the ____ extension.',
                answers: [
                    { text: '.htl', correct: 'false' },
                    { text: ' .html', correct: 'true' },
                    { text: '.hml', correct: 'false' },
                    { text: '.htnl', correct: 'false' }
                ]
            }
        ]
    }, {


        title: 'geography',
        content: [{
                question: 'What is the largest Desert?',
                answers: [
                    { text: 'Gobi', correct: 'false' },
                    { text: ' Antarctic', correct: 'true' },
                    { text: 'Kalahari', correct: 'false' },
                    { text: '', correct: 'false' }
                ]
            },
            {
                question: 'Which is world smallest ocean?',
                answers: [
                    { text: ' Arctic', correct: 'true' },
                    { text: ' Pacific', correct: 'false' },
                    { text: ' Indian', correct: 'false' },
                    { text: '', correct: 'false' }
                ]
            },
            {
                question: 'Which is the deepest ocean?',
                answers: [
                    { text: 'Pacific', correct: 'true' },
                    { text: 'Atlantic', correct: 'false' },
                    { text: 'Indian', correct: 'false' },
                    { text: '', correct: 'false' }
                ]
            },
            {
                question: 'Which is the smallest desert in the world?',
                answers: [
                    { text: 'Kalahari', correct: 'false' },
                    { text: 'Carcross', correct: 'true' },
                    { text: 'Sahara', correct: 'false' },
                    { text: 'wrap', correct: 'false' }
                ]
            },
            {
                question: 'Which country is named after Jesus?',
                answers: [
                    { text: 'El Salvador', correct: 'true' },
                    { text: 'Haiti', correct: 'false' },
                    { text: 'Israel', correct: 'false' },
                    { text: '', correct: 'false' }
                ]
            },
            {
                question: 'What is the capital of Kosovo?',
                answers: [
                    { text: ' Victoria', correct: 'false' },
                    { text: ' Cristina', correct: 'true' },
                    { text: 'Lome', correct: 'false' },
                    { text: ' ', correct: 'false' }
                ]
            },
            {
                question: 'What is the capital of Iceland?',
                answers: [
                    { text: 'Dhaka', correct: 'true' },
                    { text: ' Lima', correct: 'false' },
                    { text: 'Reykjavik', correct: 'false' },
                    { text: ' H6', correct: 'false' }
                ]
            },
            {
                question: 'What is the deepest river in the world?',
                answers: [
                    { text: ' Congo', correct: 'true' },
                    { text: ' Danube', correct: 'true' },
                    { text: ' Nile', correct: 'false' },
                    { text: '', correct: 'false' }
                ]
            },
            {
                question: 'Roughly how many countries are there in Asia?',
                answers: [
                    { text: '45', correct: 'false' },
                    { text: ' 50', correct: 'true' },
                    { text: '55', correct: 'false' },
                    { text: '', correct: 'false' }
                ]
            }
        ]
    }, {

        title: 'locations',
        content: [{
                question: 'Rome is the capital of ?',
                answers: [
                    { text: 'France', correct: 'false' },
                    { text: ' Belgium', correct: 'false' },
                    { text: 'Wales', correct: 'false' },
                    { text: 'Italy', correct: 'true' }
                ]
            },
            {
                question: 'Sofia is the capital of ? ',
                answers: [
                    { text: 'Bulgaria', correct: 'true' },
                    { text: ' Lativa', correct: 'false' },
                    { text: 'Poland', correct: 'false' },
                    { text: 'Russia', correct: 'false' }
                ]
            },
            {
                question: 'Vienna is the capital of ?',
                answers: [
                    { text: 'Switzerland', correct: 'false' },
                    { text: 'Austria', correct: 'true' },
                    { text: 'Italy', correct: 'false' },
                    { text: 'Germany', correct: 'false' }
                ]
            },
            {
                question: 'Taipei is the capital of ?',
                answers: [
                    { text: 'Tajikistan', correct: 'false' },
                    { text: 'Samoa', correct: 'false' },
                    { text: 'Tunisia', correct: 'false' },
                    { text: 'Taiwan', correct: 'true' }
                ]
            },
            {
                question: 'Hanoi is the capital of ?',
                answers: [
                    { text: 'Thailand', correct: 'false' },
                    { text: 'Laos', correct: 'false' },
                    { text: 'India', correct: 'false' },
                    { text: 'Vietnam', correct: 'true' }
                ]
            },
            {
                question: 'Canberra is the capital of ? ',
                answers: [
                    { text: ' New Zealand', correct: 'false' },
                    { text: 'Austria', correct: 'false' },
                    { text: 'Australia', correct: 'true' },
                    { text: 'El Salvador ', correct: 'false' }
                ]
            },
            {
                question: 'San Salvador is the capital of ?',
                answers: [
                    { text: 'Peru', correct: 'false' },
                    { text: 'El Salvador', correct: 'true' },
                    { text: 'Bolivia', correct: 'false' },
                    { text: 'Boliva', correct: 'false' }
                ]
            },
            {
                question: 'Tbilisi is the capital of ?',
                answers: [
                    { text: ' Kyrgyzstan', correct: 'true' },
                    { text: 'Liberia', correct: 'false' },
                    { text: 'Macedonia', correct: 'false' },
                    { text: 'Georgia', correct: 'true' }
                ]
            },
            {
                question: 'Kuala Lumpur is the capital of ?',
                answers: [
                    { text: 'Malawi', correct: 'false' },
                    { text: 'Malaysia', correct: 'true' },
                    { text: 'Moldova', correct: 'false' },
                    { text: 'Mauritius', correct: 'false' }
                ]
            }
        ]
    }, {

        title: 'geometry',
        content: [{
                question: 'Vertical angles that are opposite to each other are also',
                answers: [
                    { text: 'not equal', correct: 'false' },
                    { text: ' opposite', correct: 'false' },
                    { text: 'scalene', correct: 'false' },
                    { text: 'equal', correct: 'true' }
                ]
            },
            {
                question: 'Two lines that make an angle are called',
                answers: [
                    { text: 'scalene', correct: 'false' },
                    { text: ' rays', correct: 'true' },
                    { text: 'segment', correct: 'false' },
                    { text: 'vertex', correct: 'false' }
                ]
            },
            {
                question: 'The surface area of hollow cylinder with radius ‘r’ and height ‘h’ is measured by',
                answers: [
                    { text: '2πr - h', correct: 'false' },
                    { text: '2πr + h', correct: 'false' },
                    { text: 'πrh', correct: 'false' },
                    { text: '2πrh', correct: 'true' }
                ]
            },
            {
                question: 'A polygon having 10 sides is called',
                answers: [
                    { text: 'decagon', correct: 'true' },
                    { text: 'heptagon', correct: 'false' },
                    { text: 'quadrilateral', correct: 'false' },
                    { text: 'hexagon', correct: 'false' }
                ]
            },
            {
                question: 'A polygon having 8 sides is called',
                answers: [
                    { text: 'hexagon', correct: 'false' },
                    { text: 'nonagon', correct: 'false' },
                    { text: 'decagon', correct: 'false' },
                    { text: 'octagon', correct: 'true' }
                ]
            },
            {
                question: 'A triangle that has no equal sides and no equal angles is known as ',
                answers: [
                    { text: 'isosceles triangle', correct: 'false' },
                    { text: 'scalene triangle', correct: 'true' },
                    { text: 'equilateral triangle', correct: 'false' },
                    { text: 'right angle', correct: 'false' }
                ]
            },
            {
                question: 'Perimeter of a rectangle with base ‘b’ and height ‘h’ is measured by',
                answers: [
                    { text: '2 × b ⁄ h', correct: 'false' },
                    { text: '2(h + b)', correct: 'true' },
                    { text: '2(b - h)', correct: 'false' },
                    { text: '2(h - b)', correct: 'false' }
                ]
            },
            {
                question: ' A line going through the midpoint from one side to the other side of a circle is called',
                answers: [
                    { text: 'angle', correct: 'true' },
                    { text: 'area', correct: 'false' },
                    { text: 'radius', correct: 'false' },
                    { text: 'diameter', correct: 'true' }
                ]
            },
            {
                question: 'The exterior angles of any polygon sum up to',
                answers: [
                    { text: '90°', correct: 'false' },
                    { text: '180°', correct: 'false' },
                    { text: '270°', correct: 'false' },
                    { text: '360°', correct: 'true' }
                ]
            }
        ]
    }

]





export { quizes, getTitle, joinFunction, closeJoinFunction }