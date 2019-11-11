import React from "react";
import Joke from '../aQandOneLinerJokes/jokes'

function yourJoke (props) {
    return(
        <div>
<Joke question = {props.question} name={props.name} answer={props.answer} oneLiner={props.oneLiner} />

        </div>
    )
}
export default yourJoke