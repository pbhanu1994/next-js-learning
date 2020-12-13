import React from 'react';

export const Sidebar = ({posts}) => {
     return posts.map((post) => 
         <li key={post.id}>{post.title}</li>
    )
}