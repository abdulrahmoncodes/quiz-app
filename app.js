// const quizData =[{
//     question: 'How old is AbdurRahman?',
//     a: '12',
//     b: '20',
//     c: '34',
//     d: '51',
//     correct:'b',
// },{
//     question: 'What is the most used programming language in 2019?',
//     a: 'Java',
//     b: 'Python',
//     c: 'JavaScript',
//     d: 'C',
//     correct: 'c',
// }, {
//     question: 'What does HTML stand for?',
//     a: 'HyperText Mockup Language',
//     b: 'HyperText Marker Language',
//     c: 'HyperText Markup  Language',
//     d: "none of the above",
//     correct: 'c',
// }, {
//     question: 'What year was JavaScript launched?',
//     a: '2021',
//     b: '2009',
//     c: '2000',
//     d: 'none of the above',
//     correct: 'd',
// }, {
//     question: 'How many percent of the Earth is water?',
//     a: '20%',
//     b: '70%',
//     c: '45%',
//     d: 'all of the above',
//     correct: 'b',
// },];

// const quiz = document.getElementById('quiz');
// const answer$1s = document.querySelectorAll('.answer');
// const question$1 = document.getElementById('question');
// const a_text = document.getElementById('a_text');
// const b_text = document.getElementById('b_text');
// const c_text = document.getElementById('c_text');
// const d_text = document.getElementById('d_text');
// const submitBtn = document.getElementById('submit');

// let currentQuiz = 0;
// let score = 0;

// loadQuiz();

// function loadQuiz() {
//     deselectAnswers();

//     const currentQuizData = quizData[currentQuiz];
//     question$1.innerText= currentQuizData.question;

//     a_text.innerText = currentQuizData.a;
//     b_text.innerText = currentQuizData.b;
//     c_text.innerText = currentQuizData.c;
//     d_text.innerText = currentQuizData.d;  

// currentQuiz++;

// }

// function getSelected() {
    
//     let answer = undefined;
    
//     answer$1s.forEach((answer$1) => {
//             if (answer$1.checked) {
//                answer = answer$1.id;
//             }
//     });
//    return answer;
// }

// function deselectAnswers(){
//     answer$1s.forEach((answer$1)=>{
//         answer$1.checked = false;
//     });
// }

// submitBtn.addEventListener('click', ()=>{

//     const answer = getSelected() ;

//         if (answer) {
//             if (answer === quizData[currentQuiz].correct) {
//             score++; 
//             }
//             currentQuiz++;
//             if (currentQuiz < quizData.length) {
//                 loadQuiz(); 
//             } else {
//                  quiz.innerHTML = `<h2>You answers correctly ${score}/${quizData.length} questions.</h2> <button onclick= 'location.reload()>Reload</button>`
//             }       
//     }
// })

let color = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
let hexColor = document.querySelector('.color-hex');
let btn = document.querySelector('.click');


const colorCode = ()=>{
 return Math.floor(Math.random() * color.length)
}
btn.addEventListener('click', ()=>{
    let ash = '#';

    for (let index = 0; index < 6; index++) {
        let variable = colorCode()
        ash = ash+color[variable];
        document.body.style.backgroundColor = ash + color[variable]
        hexColor.textContent = ash + color[variable]
        console.log(ash + color[variable])  
        
    }
   

})
