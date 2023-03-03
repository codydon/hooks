import React, { useState, useCallback } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function ParentComponent() {
    const[age, SetAge] = useState(25)
    const[salary, setSalary] = useState(50000)

    const incrementAge = useCallback(()=>{
        SetAge(age + 1)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])

  return (
    <div>
        <Title />
        <Count text="Age" count={age} />
        <Button handleClick={incrementAge}> increment age</Button>
        <Count text="salary" count={salary} />
        <Button handleClick={incrementSalary}> increment Salary</Button>
    </div>
  )
}

export default ParentComponent