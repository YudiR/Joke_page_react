import React from "react";
import Layout from './layout'
function apiJokes(props) {

  return( <div style={{marginTop: '100px'}}>

    <Layout title='One Liner' body={props.joke}/>

  </div> )
}

export default apiJokes;
