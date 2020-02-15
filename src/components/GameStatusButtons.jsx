import React from 'react'

function GameStatusButtons({handleStatsClick}){
  return(
    <section className="buttons">
      <div className="statButtons">
        {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        <button className="statButtons__down" onClick={() => handleStatsClick("down")}>Down</button>
        <button className="statButtons__quarter" onClick={() => handleStatsClick("quarter")}>Quarter</button>
      </div>
    </section>
  )
}

export default GameStatusButtons