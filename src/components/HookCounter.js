import React, {useState, useEffect} from 'react'

function HookCounter() {

//useState Hook
const [count, setCount] = useState(0) //array destructuring
const [name, setName] = useState('')
useEffect(() => {
  console.log('Updating doc title')
  document.title = `You clicked ${count} times`
}, [count])

  return (
    <div>
      <h4>useState int</h4>
      <input type="text" value={name} onChange={ e => setName(e.target.value)} />
        <button onClick={ () => setCount(count + 1 )} >Count {count}</button>
    </div>
  )
}

export default HookCounter 