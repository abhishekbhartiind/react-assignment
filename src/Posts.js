import React, { useState, useEffect } from 'react'
import Post from './components/Post'

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchPostData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if(response.ok){
                    return response.json()
                }
                throw response
            })
            .then(data => {
                setPosts(data)
            })
            .catch(err => console.log(`Error fetching photos ${err}`))
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchPostData()
    }, [])

    if(loading) return (
        <div className="loader-container">
            <h1>Loading..</h1>
        </div>
    )

    return (
        <section className="container">
            {posts.map(post => (
                <Post post={post}/>
            ))}
        </section>
    )
}

export default Posts
