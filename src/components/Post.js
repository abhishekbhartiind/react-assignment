import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
    const { id, title, body } = post
    
    return (
        <div className="post-item" key={id}>
            <Link to={`/post/${id}`} className="post-link">
                <h3 className="center">{title}</h3>
                <p className="center">{body}</p>
            </Link>
        </div>
    )
}

export default Post
