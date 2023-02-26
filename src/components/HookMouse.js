import React , {useState, useEffect}from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('Mouse Event')
        window.addEventListener('mousemove', logMousePosition)

        // claenup function
        return() =>{
            console.log('component unmounting code')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])
  return (
    <div>
      <h4>useEffect cleanup</h4>
      Hook X- {x} Hook Y- {y}</div>
  )
}

export default HookMouse