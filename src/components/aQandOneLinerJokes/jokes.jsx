import React from "react";
import Layout from "../jokeLayout/layout";

function jokes(props) {
  if (props.question) {
    var title = "Question";
  } else {
    title = "One Liner";
  }
  if (props.answer) {
    var title2 = "Answer";
  } else {
    title2 = null;
  }
  if (props.oneLiner) {
    var body = props.oneLiner;
  } else {
    body = props.question;
  }
  return (
    <div style={{ marginTop: "75px" }}>
      <Layout title={title} body={body} />
      {props.answer && <Layout title="Answer" body={props.answer} />}
    </div>
  );
}

export default jokes;
