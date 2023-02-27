import React, { useReducer } from 'react'

const intialState = 0

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return intialState
        default:
            return state
    }
}

function Counter3() {
    const [count, dispatch] = useReducer(reducer, intialState)
    const [count2, dispatch2] = useReducer(reducer, intialState)
    return (
        <div>
            <h4>Multiple useReducers</h4>
            <div>Count - {count}</div>
            <button onClick={() => dispatch('increment')} >Increment</button>
            <button onClick={() => dispatch('decrement')} >Decrement</button>
            <button onClick={() => dispatch('reset')} >Reset</button>
            {/*  */}
            <div>
                <div>CountTwo - {count2}</div>
                <button onClick={() => dispatch2('increment')} >Increment</button>
                <button onClick={() => dispatch2('decrement')} >Decrement</button>
                <button onClick={() => dispatch2('reset')} >Reset</button>
            </div>
        </div>

    )
}

export default Counter3
