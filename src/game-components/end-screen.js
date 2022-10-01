import React from 'react'
import './end-screen.css'

function EndScreen({score, bestScore, onClickRetry}) {

  function Stat({label, value}) {
    return (
      <h2 className='final-score'>{label}: {value}</h2>
    )
  }
  return (
    <div className='end-screen'>
      <h1 className='quiz-complete'>Quiz Complete!</h1>
      <h1 className='quiz-complete'>🏆🥇📚</h1>
      <Stat value= {score} label ="Score"/>
      <Stat value= {bestScore} label ="Best"/>
      <button className='retry-button' onClick={onClickRetry}>Retake Quiz</button>
    </div>
  )
}

export default EndScreen
