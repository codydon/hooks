import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
    // const [posts, setPosts] = useState([])
    const [post, setPost] = useState({})
    const [id, setID] = useState(1)
    const [idBtn, setIDBtn] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idBtn}`)
            .then(res => {
                console.log(res)
                // setPosts(res.data)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idBtn])

    const postFetcher = () => {
        setIDBtn(id)
    }

    return (
        <div>
            <h3>DATA FETCHING</h3>
            {/* <form onSubmit={postFetcher} > */}
                <input type="text" value={id} onChange={e => setID(e.target.value)} />
                <button type='button' onClick={postFetcher} >Fetch Post</button>
            {/* </form> */}
            <div>
                {post.title}
            </div>
            {/* <ul>
                {posts.map(post => (<li key={post.id}>{post.title}</li>))}
            </ul> */}
        </div>
    )
}

export default DataFetching