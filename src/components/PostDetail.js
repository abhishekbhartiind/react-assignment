import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const PostDetail = () => {
    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    const fetchParticularPost = (postId) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => {
                if(response.ok){
                    return response.json()
                }
                throw response
            })
            .then(data => {
                console.log(data, "data")
                setPost(data)
            })
            .catch(err => console.log(`Error fetching photos ${err}`))
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchParticularPost(id)
    },[id])


    if(loading) return (
        <div className="loader-container">
            <h1>Loading</h1>
        </div>
    )

    return Object.values(post).length > 0 ? (
        <section>
            <h5 className="center">Id: {post.id}</h5>
            <h1 className="center">{post.title}</h1>
            <p className="center">{post.body}</p>
        </section>
    ): (
        <div className="empty-container">
            <h1>No Post Found</h1>
        </div>
    )
}

export default PostDetail
