import React, {useEffect, useState} from 'react';
import {IPostModel} from "../models/IPostModel";
import PostsComponent from "../components/PostsComponent";
import {Outlet, useSearchParams} from "react-router-dom";


const PostsPage = () => {
    let [searchParams] =useSearchParams()
    let page =searchParams.get('page')

    const [posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {
        let skip;
        if(page) {
            skip = +page * 20
            fetch('https://jsonplaceholder.typicode.com/posts?skip=' + skip)
                .then(value => value.json())
                .then(value => {
                    setPosts(value);
                });
        }else{
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(value => value.json())
                .then(value => {
                    setPosts(value);
                })
        }
    }, [page]);




    return (
        <div>
            <Outlet/>
            <hr/>
            <PostsComponent Posts={posts}/>
        </div>
    );
};

export default PostsPage;