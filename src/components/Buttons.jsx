import React from 'react'
import ScoreboardButtons from './ScoreboardButtons'

function Buttons({handleScoreboardClick}){
  return(
    <div className="score-board-controls">
      <ScoreboardButtons handleScoreboardClick={handleScoreboardClick}/>
    </div>
  )
}

export default Buttons