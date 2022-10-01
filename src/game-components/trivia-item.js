import React, { useState } from 'react'
import './trivia-item.css'

function TriviaItems({question, questionNum, totalQuestionNum, correctAnswer, incorrectAnswer, onClickNext, scoreUpdate}) {
  const[selectedAnswer, setSelectedAnswer] = useState(null)
  const hasPickedAnswer = selectedAnswer !== null

  const checkAnswer = (event) => {
    const playerAnswer = event.target.innerHTML
    setSelectedAnswer(playerAnswer)
    const isCorrect = playerAnswer === correctAnswer 
   scoreUpdate(isCorrect) 
   
  }

  const allAnswer = [correctAnswer,...incorrectAnswer].sort(()=> 0.5 - Math.random())
  const [shuffledAnswer, setShuffledAnswer ]= useState(allAnswer)


 let buttonNext = 'button-next'
 let finish = questionNum === totalQuestionNum 
 if(finish){
  buttonNext += ' button-finish'
 }


  const possibleChoices = shuffledAnswer.map(choice=>{
    let classname = 'trivia-choices'
    if(hasPickedAnswer){
      classname += ' trivia-choice-disabled'

      function speak(message){
      const voiceArray =[5,2,6]
      const randomVoice = voiceArray[Math.floor(Math.random() * voiceArray.length)]
      const voices = window.speechSynthesis.getVoices();
      const utterance = new SpeechSynthesisUtterance(message)
      utterance.pitch = 10
      utterance.rate = 1
      utterance.voice = voices[randomVoice]
      speechSynthesis.speak(utterance)
      }

      const thisAnswer = choice === selectedAnswer
      const isCorrect = choice === correctAnswer
      if(thisAnswer && isCorrect){
        classname +=' trivia-choice-correct'
        speak("correct")
      }
       else if (thisAnswer && !isCorrect){
        classname +=' trivia-choice-incorrect'
        speak(`incorrect, the answer is ${correctAnswer}`)      
        }    
    }  else {
      buttonNext += ' button-next-disabled'
    }

    return (
    <li className='trivia-li'><button type='button' disabled={hasPickedAnswer} className={classname} onClick={checkAnswer}>{choice}</button></li>
    )
  })

  const buttonText = finish ? "Finish" : "Next -->"
  return (
    <div className='trivia-item--container'>
      <p className='trivia-question'>{questionNum}{`)`} {question}</p>
      <div className='choices-div'>
        <ul className='trivia-ul'>
          {possibleChoices}
        </ul>
      </div>
      <button className= {buttonNext} disabled={!hasPickedAnswer} onClick ={onClickNext}>{buttonText} </button>
    </div>
  )
}

export default TriviaItems
