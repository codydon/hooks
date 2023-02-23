import React, {useState} from 'react'

function HookCounter() {

    //useState Hook
const [count, setCount] = useState(0) //array destructuring


  return (
    <div>
        <button onClick={ () => setCount(count + 1 )} >Count {count}</button>
    </div>
  )
}

export default HookCounter