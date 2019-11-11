import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Layout from './layout'
import item from "../../../../../../31Udemy/udemyReact/6BurgerProject/burger_maker/src/components/navigation/item/item";

configure({adapter: new Adapter})

describe('<Layout/>', () => {
    let wrapper 

    beforeEach(() => {
        wrapper = shallow(<Layout body='TestBody' title= 'TestTitle'/>)
    })
    it('should render one h1 tag and one h3 tag', () => {
        console.log('wrapper debuged', wrapper.debug())
        expect(wrapper.find('h1')).toHaveLength(1)
        expect(wrapper.find('h3')).toHaveLength(1)
    })
})