import React, {useEffect, useState} from 'react';
import { Sidebar } from './Sidebar';
import { Content } from './Content';

export const Blog = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const postContent = [
            {id: 1, title: "Hello World", content: "First content description here"},
            {id: 2, title: "Installation", content: "Second description goes here"}
        ];

        setPosts(postContent);
    },[])

    return (
        <div>
            <h1>Blog Component</h1>
           <Sidebar posts={posts} />
           <hr />
           <Content posts={posts} />
        </div>
    )
}