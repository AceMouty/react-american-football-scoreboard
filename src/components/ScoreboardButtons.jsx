import React from 'react'

function ScoreboardButtons({handleScoreboardClick}){
  return(
    <section className="buttons">
      <div className="homeButtons">
        {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        <button className="homeButtons__touchdown" onClick={() => handleScoreboardClick("home", 6)}>Home Touchdown</button>
        <button className="homeButtons__fieldGoal" onClick={() => handleScoreboardClick("home", 1)}>Home Field Goal</button>
      </div>
      <div className="awayButtons">
        <button className="awayButtons__touchdown" onClick={() => handleScoreboardClick("away", 6)}>Away Touchdown</button>
        <button className="awayButtons__fieldGoal" onClick={() => handleScoreboardClick("away", 1)}>Away Field Goal</button>
      </div>
    </section>
  )
}

export default ScoreboardButtons