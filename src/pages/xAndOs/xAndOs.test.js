import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { configure, shallow } from "enzyme";
import { XandOs } from "./xAndOs";
import { tsConstructSignatureDeclaration } from "@babel/types";

configure({ adapter: new Adapter() });

describe("<XandOs/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<XandOs />);
  });

  it(" squre one is clicked playerOneClicked should have one in its array and letter square changes to x", () => {
    wrapper.find({ testid: "DivOne" }).simulate("click");
    wrapper.find({ testid: "DivTwo" }).simulate("click");

    expect(wrapper.find({ testid: "HOne" }).text()).toEqual("x");

    expect(wrapper.state().playerOneClicks).toEqual([1]);
  });

  it(" When player One wins, the game is reset and his win count is one", async () => {
    wrapper.find({ testid: "DivThree" }).simulate("click");
    wrapper.find({ testid: "DivFour" }).simulate("click");
    wrapper.find({ testid: "DivOne" }).simulate("click");
    wrapper.find({ testid: "DivFive" }).simulate("click");
    wrapper.find({ testid: "DivTwo" }).simulate("click");
    
    
    expect(wrapper.find({ testid: "HOne" })).toHaveLength(0);
    
    
    await new Promise(resolve => {
        setTimeout(() => {
            expect(wrapper.find({ testid: "HTwo" }).text()).toEqual("?");
            expect(wrapper.find({ testid: "HOne" }).text()).toEqual("?");
            expect(wrapper.find({ testid: "HFour" }).text()).toEqual("?");
            expect(wrapper.find({ testid: "HThree" }).text()).toEqual("?");
            expect(wrapper.find({ testid: "HFive" }).text()).toEqual("?");
            
            expect(wrapper.state().playerOneWins).toEqual(1);
            resolve();
        }, 4999);
      });


      

    
  });
});
