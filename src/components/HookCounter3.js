import React, {useState} from 'react'

function HookCounter3() {
    const [name, setName] = useState({firstname:'', lastname: ''}) //object
    return (
    <div>
        <h4>useState Object</h4>
        <form>
            <input type="text" value={name.firstname} onChange={ e => setName({...name, firstname: e.target.value})} />
            <input type="text" value={name.lastname} onChange={ e => setName({...name, lastname: e.target.value})} />
            <h4>Your first name is - {name.firstname}</h4>
            <h4>Your last name is - {name.lastname}</h4>
            <h4> {JSON.stringify(name)}</h4>
        </form>
    </div>
  )
}

export default HookCounter3