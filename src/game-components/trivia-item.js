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
 //button design when finish
 if(finish){
  buttonNext += ' button-finish'
 }
 //Displaying possible choices in random
  const possibleChoices = shuffledAnswer.map(choice=>{
    let classname = 'trivia-choices'
    //Checking if you pick an answer and updating the classname for designing and disabling the buttons
    if(hasPickedAnswer){
      classname += ' trivia-choice-disabled'
      const thisAnswer = choice === selectedAnswer
      const isCorrect = choice === correctAnswer

      //updating button design if the answer is CORRECT or WRONG
      if(thisAnswer && isCorrect){
        classname +=' trivia-choice-correct'
      }
      else if(thisAnswer && !isCorrect){
        classname +=' trivia-choice-incorrect'    
        }    
    }else{
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
