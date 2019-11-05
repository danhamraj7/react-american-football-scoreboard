//TODO: STEP 1 - Import the useState hook.

import React, {
  useState
} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {

  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  
  //You'll need one for the home score and another for the away score.

  // initial count 
  const initialCount = 0;

  // home team

  const [homeScore, setHomeScore] = useState(initialCount);

  const [homeFeildGoal, sethomeFieldGoal] = useState(initialCount);



  // away team
  const [awayScore, setAwayScore] = useState(initialCount);

  const [awayFieldGoal, setAwayFieldGoal] = useState(initialCount)

  // event handlers 

  // homeScore
  const handleHomeScore = e => {
    e.preventDefault();
    setHomeScore(homeScore + 7)
  }

  // homeFeildGoal
  const handlehomeFieldGoal = e => {
    e.preventDefault();
    sethomeFieldGoal(setHomeScore(homeScore + 3))

  }

  // awayScore

  const handleAwayScore = e => {
    e.preventDefault();
    setAwayScore(awayScore + 7)
  }

  // away feild goal
  const handleAwayFieldGoal = e => {
    e.preventDefault();
    setAwayFieldGoal(setAwayScore(awayScore + 3))

  }

  return (

    <
    div className = "container" >

    <
    section className = "scoreboard" >

    <
    div className = "topRow" >

    <
    div className = "home" >

    <
    h2 className = "home__name" > Lions < /h2>


    {
      /* TODO STEP 3 - We need to change the hardcoded values in 
          these divs to accept dynamic values from our state. */
    }

    <
    div className = "home__score" > {
      homeScore
    } < /div> <
    /div>

    <
    div className = "timer" > 00: 03 < /div>

    <
    div className = "away" >

    <
    h2 className = "away__name" > Tigers < /h2>

    <
    div className = "away__score" > {
      awayScore
    } < /div>

    <
    /div>

    <
    /div>

    <
    BottomRow / >

    <
    /section>

    <
    section className = "buttons" >

    <
    div className = "homeButtons" >

    {
      /* TODO STEP 4 - Now we need to attach our state setter 
          functions to click listeners. */
    }

    <
    button onClick = {
      handleHomeScore
    }

    className = "homeButtons__touchdown" > Home Touchdown < /button>

    <
    button onClick = {
      handlehomeFieldGoal
    }

    className = "homeButtons__fieldGoal" > Home Field Goal < /button>

    <
    /div>

    <
    div className = "awayButtons" >

    <
    button onClick = {
      handleAwayScore
    }

    className = "awayButtons__touchdown" > Away Touchdown < /button>

    <
    button onClick = {
      handleAwayFieldGoal
    }

    className = "awayButtons__fieldGoal" > Away Field Goal < /button>

    <
    /div>

    <
    /section>

    <
    /div>
  );
}
export default App;