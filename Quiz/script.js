let counter = 0;

let quiz = [
  {
    'question': '2+2?',
    'answers': [ '1', '2', '4', '5' ],
    'rightAnswer': 2
  },
  {
    'question': 'Президент России?',
    'answers': ['Сталин', 'Путин', 'Ленин' ],
    'rightAnswer': 1
  },
  {
    'question': 'Какая степень двойки даст 1024?',
    'answers': ['4', '8', '10' ],
    'rightAnswer': 2
  },
  {
    'question': 'На какой планете ты живешь?',
    'answers': ['Марс', 'Юпитер', 'Сатурн', 'Нибиру', 'Венера', 'Земля' ],
    'rightAnswer': 5
  }
];


let questionBlock = document.querySelector( '#question' ),
    answersBlock = document.querySelector( '#answers' ),
    resultBlock = document.querySelector( '#result' );
    

function setQuestion( { question, answers } ) {
  return new Promise( ( resolve, reject) => {
    questionBlock.innerHTML = question;
      
    answers.forEach( ( answer, index ) => {
      let button = document.createElement( 'button' );
          button.innerHTML = answer;
          button.value = index;
          
          button.onclick = ( e ) => {      
            questionBlock.innerHTML = '';
            answersBlock.innerHTML = '';        
            resolve( e.target.value );
          }
      
      answersBlock.appendChild( button );
    } );
  } );
}

async function startQuiz( allQuestions ) {
  for( let i = 0; i < allQuestions.length; i++ ) {
    let currentQuestion = allQuestions[i];
    
    await setQuestion( currentQuestion )
      .then( ( userAnswer ) => {
        if ( userAnswer == currentQuestion.rightAnswer ) {
          counter++;
        }
      } );
  }
  return counter;
}

startQuiz( quiz )
  .then( ( result ) => resultBlock.innerHTML = `Количество правильных ответов - ${result}! Мои поздравления!!!` );