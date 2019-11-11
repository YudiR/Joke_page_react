import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Jokes from "./jokes";
import item from "../../../../../../31Udemy/udemyReact/6BurgerProject/burger_maker/src/components/navigation/item/item";
import Layout from "../jokeLayout/layout";
configure({ adapter: new Adapter() });

describe("<Jokes /a&q/>", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Jokes answer="" />);
  });

  it("should be two layout components, layout prop title as answer and body as 'answer' when there is an answer prop", () => {
    wrapper.setProps({ answer: "answer" });
    expect(wrapper.find(Layout)).toHaveLength(2);
    expect(wrapper.contains(<Layout title="Answer" body={"answer"} />)).toEqual(
      true
    );
  });

  it("should be one layout component when there is no answer prop", () => {
    expect(wrapper.find(Layout)).toHaveLength(1);
    
  });
});
