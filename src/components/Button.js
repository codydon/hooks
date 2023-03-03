import React from 'react'

function Button({handleClick, children}) {
    console.log('Rendering button - ', children)
  return (
    <button onClick={handleClick}>{children}</button>
  )
}

export default React.memo(Button)
// react.memo enables a component to rerender only when a change in state or prop. it optimizes perfomance