import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(pcount => pcount + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)

        //cleanup
        return () => {
            clearInterval(interval)
        }
    }, [])
    
    return (
        <div>
            <div>counter</div>
            <div>{count}</div>
        </div>

    )
}

export default IntervalHookCounter