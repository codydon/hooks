import React, {useState, useEffect} from 'react'

function HookCounter() {

//useState Hook
const [count, setCount] = useState(0) //array destructuring

useEffect(() => {
  document.title = `You clicked ${count} times`
})

  return (
    <div>
        <button onClick={ () => setCount(count + 1 )} >Count {count}</button>
    </div>
  )
}

export default HookCounter