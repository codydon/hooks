import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const intialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }

        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'something went wrong'
            }

        default:
            return state
    }
}

function DataFetching2() {
    const [state, dispatch] = useReducer(reducer, intialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                dispatch(({ type: 'FETCH_SUCCESS', payload: response.data }))
            })
            .catch(error => {
                dispatch(({ type: 'FETCH_ERROR' }))
            })
    }, [])
    return (
        <div>
            {/*  */}
            <h4>Fetching data with useReducer</h4>
            {state.loading ? 'Loading ...' : state.post.title}
            {state.error ? state.error : null}
        </div>)
}

export default DataFetching2