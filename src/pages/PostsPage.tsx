import React, {useEffect, useState} from 'react';
import {IPostModel} from "../models/IPostModel";
import PostsComponent from "../components/PostsComponent";
import postApiService from "../services/post.api.service";

const PostsPage = () => {
    const [posts, setPosts] = useState<IPostModel[]>([])
    useEffect(() => {
        postApiService.getAllPosts().then(value => setPosts(value.data))
    }, []);
    return (
        <div>
            <PostsComponent Posts={posts}/>
        </div>
    );
};

export default PostsPage;