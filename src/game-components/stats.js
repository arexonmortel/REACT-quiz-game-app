import React from 'react'
import './stats.css'

function Stats({score, questionNum, totalQusetion}) {
  return (
    <div className='stats-div'>
    <ul>
      <li className='score'>Score: {score}</li>
      <li className='question'>QUESTION {questionNum} OF {totalQusetion}</li>
    </ul>
    </div>
  )
}

export default Stats
