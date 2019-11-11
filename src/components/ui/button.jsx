import React from "react";
import { Button } from "react-bootstrap";
import css from './button.css'

var SingleButton = props => {
  
  return (
    <React.Fragment>
      <Button className={props.class} variant={props.colour} size="lg" onClick={props.click}>
        {props.children}
      </Button>
    </React.Fragment>
  );
};

export default SingleButton;
