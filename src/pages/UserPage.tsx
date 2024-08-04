import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";




const UserPage = () => {
        let {id} = useParams()
        let location = useLocation()
        let state: IUserModel = location.state
        const [user, setUser] = useState<IUserModel>()
        const [posts, setPosts] = useState<IPostModel[]>([])
        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users/' + state.id)
                .then(value => value.json())
                .then(value => {
                    setUser(value);
                });
        }, [state.id]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + state.id  + "/posts")
            .then(value => value.json())
            .then(value => {
                console.log(value)
                setPosts(value);
            });
    }, [state.id]);
    
    
    return (
        <div>
            user id: {id}
         <div>{JSON.stringify(state.name)}</div>
         <div>{JSON.stringify(state.username)}</div>
         <div>{JSON.stringify(state.email)}</div>
         <div>{JSON.stringify(state.address.city)}</div>
         <div>{JSON.stringify(state.address.street)}</div>
         <div>{JSON.stringify(state.address.zipcode)}</div>
            <h2>posts</h2>
            <ul>
                {
                    posts.map(post=>(<li key={post.id}>
                        <div>post id: {post.id}</div>
                        <div> title: {post.title}</div>
                    </li>))
                }
            </ul>

        </div>
    );
};

export default UserPage;