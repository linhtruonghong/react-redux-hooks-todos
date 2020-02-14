import React, {useContext, useReducer} from 'react';
import {UserContext} from './index';

const initialState = {
    count: 0
};

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {
                count: state.count + 1
            };
        case "decrement":
            return {
                count: state.count - 1
            };
        case "reset":
            return initialState;
        default:
            return initialState
    }
};

export default function App_c5_s4() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = useContext(UserContext);
    return (
        <div>
            Count: {state.count}
            <button className="m-2" onClick={() => dispatch({type: "increment"})}>Increment</button>
            <button className="mr-2" onClick={() => dispatch({type: "decrement"})}>Increment</button>
            <button onClick={() => dispatch({type: "reset"})}>Reset</button>
        </div>
    )
}