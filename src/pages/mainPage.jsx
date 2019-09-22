import React from "react";
import ApiJokes from "../components/apiJokes";
import Jokes from "../components/jokes";
import {Link} from "react-router-dom"
import YourJoke from '../components/yourjoke'

function MainPage(props) {
  return (
    <div >
           <h1> <Link to="/yourjoke">Make a Joke!</Link></h1>
           <YourJoke answer={props.answer} oneLiner={props.oneLiner} question={props.question} name={props.name}/>
      <ApiJokes joke={props.apiJoke} name= {props.name} />
      {/*  */}
      <Jokes
        answer={props.answerJoke}
        // 
        question={props.questionJoke}
        // 
        oneLiner={props.oneLinerJoke}
        // 
      />
    </div>
  );
}

export default MainPage