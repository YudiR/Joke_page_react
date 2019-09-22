import React from "react";
import Joke from './jokes'

function yourJoke (props) {
    return(
        <div>
            {props.name && <h1> {props.name} s Joke</h1>}
<Joke question = {props.question} answer={props.answer} oneLiner={props.oneLiner} />

        </div>
    )
}
export default yourJoke