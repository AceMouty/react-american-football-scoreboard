import React, {useState} from "react";
import BottomRow from "./BottomRow";
import Buttons from "./buttons"
import "./App.css";

function ScoreBoard () {

	const [homeScore, setHomeScore] = useState(10);
	const [awayScore, setAwayScore] = useState(10);

	const homeTouchdownHandler = () => setHomeScore(homeScore + 7);
	const homeFieldGoalHandler = () => setHomeScore(homeScore + 3);

	const awayTouchdownHandler = () => setAwayScore(awayScore + 7);
	const awayFieldGoalHandler = () => setAwayScore(awayScore + 3);

	return(
		<div>
			<section className="scoreboard">
					<div className="topRow">
						<div className="home">
							<h2 className="home__name">Lions</h2>

							{/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

							<div className="home__score">{homeScore}</div>
						</div>
						<div className="timer">00:03</div>
						<div className="away">
							<h2 className="away__name">Tigers</h2>
							<div className="away__score">{awayScore}</div>
							<div className="container"></div>
						</div>
					</div>
					<BottomRow/>
				</section>
				<Buttons setHomeTouchdown={homeTouchdownHandler} setHomeFieldgoal={homeFieldGoalHandler} setAwayTouchdown={awayTouchdownHandler} setAwayFieldgoal={awayFieldGoalHandler}/>
		</div>
	)
}

export default ScoreBoard;