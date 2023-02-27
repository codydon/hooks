import React, { useContext } from 'react'
import { CountContext } from '../App'

function ComponentA() {
  const countContext = useContext(CountContext)
  return (
    <div>
      <h4>useContext + useReducer counter</h4>
      ComponentA count - {countContext.countState}
      <button onClick={() => countContext.countDispatch('increment')} >Increment</button>
      <button onClick={() => countContext.countDispatch('decrement')} >Decrement</button>
      <button onClick={() => countContext.countDispatch('reset')} >Reset</button>
    </div>
  )
}

export default ComponentA