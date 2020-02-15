//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css"
import Scoreboard from './components/ScoreBoard'
import Buttons from './components/Buttons'

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [home, setHome] = useState(0)
  const [away, setAway] = useState(0)
  const [quarter, setQuarter] = useState(1)

  function handleScoreboardClick(team, amount){
    if(team === "home" && amount === 6){
      setHome(home + 6)
    } else if(team === "home" && amount === 1){
      setHome(home + 1)
    } else if(team === "away" && amount === 6){
      setAway(away + 6)
    } else{
      setAway(away + 1)
    }
  }

  return (
    <div className="container">
      <Scoreboard home={home} away={away} quarter={quarter}/>
      <Buttons handleScoreboardClick={handleScoreboardClick} home={home} away={away}/>
    </div>
  );
}

export default App;
