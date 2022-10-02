import React, { useState } from 'react'

import './game.css'
import Stats from './stats'
import TriviaItem from "./trivia-item"
import EndScreen from './end-screen'
import triviaData from './trivia-data'
import Confetti from 'react-confetti'


function Game() {

    //Declaring the Game State   
    const [gameState, setGameState] = useState({
    score: 0,
    triviaItemIndex: 0,
    isGameOver: false
  });
  
  //Destructing the Object State
  const {score, triviaItemIndex, isGameOver} = gameState;
  //Declaring current Question Number and the Total Question
  const currentQuestionNum = triviaItemIndex + 1;
  const totalQuestionNum = triviaData.length;
  //Selecting Trivia Question from the array of triviaData 
  const triviaQuestion = triviaData[triviaItemIndex];
  //Destructing the triviaQuestion Object
  const {incorrect_answers, correct_answer, question} = triviaQuestion;

  // Retry the Game
  const clickRetry = ()=> {
    setGameState({
      score: 0,
      triviaItemIndex: 0,
      isGameOver: false
    })
  }
  
  // Next Question
  const clickLoadNext = () =>{
    //Voice Update about the Game (We're gonna remove this functionality)
   /*  const message = score === 10 ? "You perfect the quiz" : score > 7 ? "You passed the quiz" : "You did not passed the quiz"
    const voices = window.speechSynthesis.getVoices();
    const utterance = new SpeechSynthesisUtterance(`quiz complete, your score is ${score}, ${message}`)
    utterance.pitch = 10
    utterance.rate = 1
    utterance.voice = voices[5]
    speechSynthesis.speak(utterance) */
    if(currentQuestionNum >= triviaData.length)
    {
      setGameState(prevState=>({
        ...prevState,
        isGameOver: true
      }))
    } else {
      setGameState(prevState => ({
        ...prevState,
        triviaItemIndex: triviaItemIndex + 1
        
      }))
    }
  }

  //Updating the Score
  const updateScore = (wasCorrectAnswer) => {
    console.log(wasCorrectAnswer)
    if(wasCorrectAnswer){
      setGameState({
        ...gameState,
        score: score + 1
      })
    }  
  }


 // Rendering the Components Conditionally
  let pageContent;
  if(isGameOver){
    pageContent = <EndScreen score ={score} bestScore = {0} onClickRetry = {clickRetry}/>
  } else {
    pageContent = <TriviaItem
    key={triviaItemIndex}
    question = {question}
    questionNum ={currentQuestionNum}
    correctAnswer ={correct_answer}
    incorrectAnswer = {incorrect_answers}
    onClickNext = {clickLoadNext}
    scoreUpdate = {updateScore}
    totalQuestionNum = {totalQuestionNum}
    />
  }

  //Getting Confitte from dependency and putting it to a variable
  const confetti = <Confetti 
  recycle= {'false'}
  width={window.innerWidth}
  height={window.innerHeight}
  numberOfPieces={1000}
  gravity = {0.2}/>

  //returning the page components
  return (
    <div className='game-div'> 
        {isGameOver && confetti}
        {!isGameOver && <Stats score ={score} questionNum= {currentQuestionNum} totalQusetion ={totalQuestionNum} />}
        {pageContent}
    </div>
  )
}

export default Game
