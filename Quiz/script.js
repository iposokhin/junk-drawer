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
  }
];

let questionBlock = document.querySelector( '#question' ),
    answersBlock = document.querySelector( '#answers' ),
    resultBlock = document.querySelector( '#result' );
    
    
function setQuestion( data ) {
  return new Promise( ( resolve, reject) => {
    questionBlock.innerHTML = data.question;
      
    data.answers.forEach( ( answer, index ) => {
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

async function startQuiz() {
  for( let i = 0; i < quiz.length; i++ ) {
    await setQuestion( quiz[i] ).then( ( userAnswer ) => {
      if ( userAnswer == quiz[i].rightAnswer ) {
        counter++;
      }
    } );
  }
  return counter;
}

startQuiz()
  .then( ( result ) => resultBlock.innerHTML = `Количество правильных ответов - ${result}! Мои поздравления!!!` );