import React, {useState} from 'react'

function HookCounter2() {
    const intialCount = 0
    const [count, setCount] = useState(intialCount)

  return (
    <div>
      <h4>useState working with previous state</h4>
        Count: {count}
        <button onClick={() => setCount(intialCount)}> Reset</button>
        <button onClick={() => setCount(pcount => pcount + 1)}> Increment</button>
        <button onClick={() => setCount(pcount => pcount - 1)}> Decrement</button>
    </div>
  )
}

export default HookCounter2