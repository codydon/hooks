import React, {useState} from 'react'

function HookCounter4() {
const [items, setItems] = useState([])

const addItem = () =>{
    setItems([...items, {id:items.length, value:Math.floor(Math.random()*10) + 1}])
}
  return (
    <div>
      <h4>useState array</h4>
        <button onClick={addItem} >Add an Item</button>
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.value}</li>
            ))}
        </ul>
    </div>
  )
}

export default HookCounter4