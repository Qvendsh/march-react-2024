import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

const PostPage = () => {
   let {id}= useParams()
   let location = useLocation()
   let state = location.state
   console.log(state)
    const [posts, setPosts] = useState<IPostModel>()
    const [comments, setComments] = useState<ICommentModel[]>([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + state.id)
            .then(value => value.json())
            .then(value => {
                setPosts(value);
            });
    }, [state.id]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + state.id + '/comments')
            .then(value => value.json())
            .then(value => {
                setComments(value);
            });
    }, [state.id]);

    return (
        <div>
            <div> post id: {state.id}</div>
            <div> title: {state.title}</div>
            <div> body: {state.body}</div>
            <ul>
                {
                comments.map(comment=>(<li key={comment.id}>
                    <div>comment id: {comment.id}</div>
                    <div>name: {comment.name}</div>
                    <div>email: {comment.email}</div>
                    <div>body: {comment.body}</div>
                </li>))
                }
            </ul>
        </div>
    );
};

export default PostPage;