import React, { useContext } from 'react'
import { UserContext, ChannelContext, CountContext } from '../App'

function ComponentF() {
    const CountContext = useContext(CountContext)
    return (
        <div>
            {/* depreciated syntax!!! */}
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <ChannelContext.Consumer>
                                {channel => {
                                    return (
                                        <div>
                                            User Context value {user}, channel context value {channel}
                                        </div>
                                    )
                                }

                                }
                            </ChannelContext.Consumer>
                        )
                        // return <div> User Context Value {user}</div>
                    }
                }
            </UserContext.Consumer>
            {/*  */}
            <h4>useContext + useReducer counter</h4>
            <button onClick={() => CountContext.CountDispatch('increment')} >Increment</button>
            <button onClick={() => CountContext.CountDispatch('decrement')} >Decrement</button>
            <button onClick={() => CountContext.CountDispatch('reset')} >Reset</button>
        </div>
    )
}

export default ComponentF