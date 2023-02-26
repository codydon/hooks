import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { UserContext, ChannelContext } from '../App'

function ComponentE() {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <div>
            <h4>UserContext Hook</h4>
            {user} - {channel}
        </div>
    )
}

export default ComponentE