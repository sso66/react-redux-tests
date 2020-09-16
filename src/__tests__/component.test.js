import React from 'react';
import App from '../App';
import { create } from 'react-test-renderer'

describe('actions', ()=> {

    it('testing app button', () => {
        let tree = create(<App />)
        expect(tree.toJSON()).toMatchSnapshot();
    });
        
    // it('should create an action to add a todo', () => {
    //     const expected = { type: 'ADD_RECIPE', payload: 'test' }

    //     expected(actions.addRecipe('test')).toEqual(expected);
    // });
});