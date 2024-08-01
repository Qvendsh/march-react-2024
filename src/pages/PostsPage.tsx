import React, {useState} from 'react';
import {IPostModel} from "../models/IPostModel";
import PostsComponent from "../components/PostsComponent";

const PostsPage = () => {
    const [posts, setPosts] = useState<IPostModel[]>([])
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(value => value.json())
        .then(value => setPosts(value))
    return (
        <div>
            <PostsComponent Posts={posts}/>
        </div>
    );
};

export default PostsPage;