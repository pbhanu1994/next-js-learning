import React from 'react';

export function Content({posts}) {
    return (posts.map((post) => 
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    ))
}