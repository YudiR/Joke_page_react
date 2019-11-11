import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createStore, compose,combineReducers } from "redux";
import Reducer from '../../store/reducers/forms'
import {Forms} from './formComponent'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap'

configure({ adapter: new Adapter() });



describe("<FormPage/>", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Forms  />);
  });

  it("There is link to home on page", () => {
    console.log(wrapper.debug)
    expect(wrapper.contains(<Link to="/">Home</Link>)).toEqual(true)
  });

  it("should have answer and question inputs.", () => {
   expect(wrapper.find({controlId: 'exampleForm.ControlTextarea1'}))
   .toHaveLength(1) 

   expect(wrapper.find({controlId: 'exampleForm.ControlInput1'}))
   .toHaveLength(1) 
  })

  it("should only have oneLiners input box when isOneLiner is set to true.", () => { 
    wrapper.setState({isOneLiner: true})
    expect(wrapper.find({testid: "oneLiner"})).toHaveLength(1)

    expect(wrapper.find({controlId: 'exampleForm.ControlTextarea1'}))
    .toHaveLength(0) 
 
    expect(wrapper.find({controlId: 'exampleForm.ControlInput1'}))
    .toHaveLength(0) 
  })

  // it("should call change function when check box is clicked. ", () => {
  //    jest.spyOn(Forms.prototype, 'change')
  //   const checkbox = wrapper.find('#formGridCheckbox')
  //   checkbox.simulate("click")

  //   expect(Forms.prototype.change).toHaveBeenCalled()
  //   Forms.prototype.func.mockRestore()
  // })


  
  //  it("should set isOneLiner state from to true and there Should only be one input on checkbox click.", () => {



});
