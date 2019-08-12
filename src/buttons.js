import React from "react";
import "./App.css";

function Buttons ({setHomeTouchdown, 
	setHomeFieldgoal, setAwayTouchdown, setAwayFieldgoal}) {

	return (
		<section className="buttons">
			<div className="homeButtons">
				{/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
				<button className="homeButtons__touchdown" onClick={setHomeTouchdown}>Home Touchdown</button>
				<button className="homeButtons__fieldGoal" onClick={setHomeFieldgoal}>Home Field Goal</button>
			</div>
			<div className="awayButtons">
				<button className="awayButtons__touchdown" onClick={setAwayTouchdown}>Away Touchdown</button>
				<button className="awayButtons__fieldGoal" onClick={setAwayFieldgoal}>Away Field Goal</button>
			</div>
		</section>
	)
}

export default Buttons