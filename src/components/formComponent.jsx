import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import {Link} from "react-router-dom"
function Forms(props) {
  var change = () => {
    console.log("change!!!");
  };
  return (
    <div style={{ padding: "60 0", paddingTop: "100px" }}>
   <h1>   <Link to="/">Home</Link></h1>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Type Your Name!!</Form.Label>

        <Form.Label></Form.Label>
        <Form.Control
        // value={props.name}
          type="name"
          name="name"
          placeholder="Your Name"
          onChange={event => {
            props.change(event);
          }}
        />
      </Form.Group>

      <Form>
        <Form.Group controlId="formGridState">
          <Form.Label>Pick your joke category!</Form.Label>
          <Form.Control
          // value={props.category}
            as="select"
            onChange={event => {
              props.change(event);
            }}
            name="category"
          >
            <option value="blue">Funny</option>
            <option value="green">Lame</option>
            <option value="red">SO SO</option>
            <option value="orange">LOL</option>
            <option value="yellow">Surprising</option>
          </Form.Control>
        </Form.Group>

        <Form.Group id="formGridCheckbox">
          <Form.Check
          // value={props.isOneLiner}
          name="isOneLiner"
            type="checkbox"
            label="Check if joke is a one liner"
            onChange={event => {
              props.change(event);
            }}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label></Form.Label>
          <Form.Control
          // value={props.oneLiner}
            type="email"
            name="oneLiner"
            placeholder="One Liner"
            onChange={event => {
              props.change(event);
            }}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label></Form.Label>
          <Form.Control
          // value={props.email}
            type="email"
            name="question"
            placeholder="Question"
            onChange={event => {
              props.change(event);
            }}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Answer</Form.Label>
          <Form.Control
          // value={props.answer}
            as="textarea"
            name="answer"
            rows="3"
            onChange={event => {
              props.change(event);
            }}
          />
        </Form.Group>

      </Form>
    </div>
  );
}
export default Forms;
