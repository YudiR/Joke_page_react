import React from "react";
import Layout from '../jokeLayout/layout'
function apiJokes(props) {

  return( <div style={{marginTop: '35px'}}
  >
    <Layout title='One Liner' body={props.joke}/>

  </div> )
}

export default apiJokes;
