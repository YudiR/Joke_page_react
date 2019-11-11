import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MainPage from './mainPage'
import ApiJoke from '../components/oneLinerApiJokes/apiJokes'
import YourJoke from '../components/personalJoke/yourjoke'
import Jokes from '../components/aQandOneLinerJokes/jokes'
import {createStore, compose, applyMiddleware, combineReducers} from 'redux'
import {  Provider, } from "react-redux";
import Reducer from '../store/reducers/forms'

configure({adapter: new Adapter()})

describe("<Main Page/>", () => {
    let wrapper 

    beforeEach(() => {
        wrapper = shallow(<MainPage/>)
    })
    
    it("When a users joke has not been added a user joke component should not be there.", () => {
        console.log('wrapper data!!!', wrapper.debug())
            wrapper.setProps({jokeData: []})
            expect(wrapper.find(YourJoke)).toHaveLength(0)
    })
    it("When users add a joke its component should be rendered", () => {
        wrapper.setProps({jokeData: [1]})
        expect(wrapper.find(YourJoke)).toBe(1)
    })

})