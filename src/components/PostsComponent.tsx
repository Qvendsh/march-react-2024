import React, {FC, useState} from 'react';
import withFetch from "../hoc/WithFetch";
import {IPost} from "../Models/IPost";


const PostsComponent:FC<{items:IPost[]}> = ({items}) => {
    return (
        <ol>
            {
              items.map(post=>(<li key={post.postId}>{post.postId}{post.title}</li>))
            }
        </ol>
    );
};

export default withFetch(PostsComponent,'/posts');