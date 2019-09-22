import React from "react";
import ComponentForm from '../components/formComponent'
function Forms(props) {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flexEnd', }}>
        <ComponentForm change={props.change} name={props.name} category={props.category} isOneLiner={props.isOneLiner} answer={props.answer} question={props.question} />
    </div>
  );
}
export default Forms;
