import React from "react";
import "./App.css";

function Buttons (props) {

	return (
		<section className="buttons">
			<div className="homeButtons">
				{/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
				<button className="homeButtons__touchdown">Home Touchdown</button>
				<button className="homeButtons__fieldGoal">Home Field Goal</button>
			</div>
			<div className="awayButtons">
				<button className="awayButtons__touchdown">Away Touchdown</button>
				<button className="awayButtons__fieldGoal">Away Field Goal</button>
			</div>
		</section>
	)
}

export default Buttons