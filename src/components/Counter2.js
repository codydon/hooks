import React, { useReducer } from 'react'

//using useReducer

// const intialState = 0
const intialState = {
    firstCounter: 0,
    secondCounter: 10
}


const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return intialState
        default:
            return state
    }
}

function Counter2() {

    const [count, dispatch] = useReducer(reducer, intialState)
    
    return (
        <div>
            <h4>useReducer Hook complex state & action</h4>
            {/* <div>Count - {count}</div> */}
            <div>Count - {count.firstCounter}</div>

            <button onClick={() => dispatch({ type: 'increment', value: 1 })} >Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })} >Decrement</button>
            <br />
            <button onClick={() => dispatch({ type: 'increment', value: 5 })} >Increment 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })} >Decrement 5</button>
            <br />
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <br/>
            <br/>
            {/* second counter */}
            <div>Count - {count.secondCounter}</div>
            <button onClick={() => dispatch({ type: 'increment2', value: 1 })} >Increment 2nd counter</button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 1 })} >Decrement 2ndcounter</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default Counter2
