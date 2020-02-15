import React from 'react'
import ScoreboardButtons from './ScoreboardButtons'
import GameStatusButtons from './GameStatusButtons'

function Buttons({handleScoreboardClick, handleStatsClick}){
  return(
    <div className="score-board-controls">
      <ScoreboardButtons handleScoreboardClick={handleScoreboardClick}/>
      <GameStatusButtons handleStatsClick={handleStatsClick}/>
    </div>
  )
}

export default Buttons