import React, {useEffect, useState} from 'react';
import PostsComponent from "../PostsComponent/PostsComponent";
import {IUser} from "../../models/IUser";
import {IPost} from "../../models/IPost";
import {getAllUsers, getPostsOfUserById} from "../../services/api_service";
import UserComponent from "../UserComponent/UserComponent";

const UsersComponent = () => {

    const [Users, setUsers] = useState<IUser[]>([])
    const [Posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        getAllUsers().then((value:IUser[])=> {
            setUsers([...value]);
        })
    }, []);


    const getPosts = (id:number)=> {
        getPostsOfUserById(id).then(Posts => setPosts([...Posts]));
    }



    return (
      <div>
          <hr/>
          <div>
              {
                  Users.map((user)=>(
                      <UserComponent key={user.id} user={user} getPosts={getPosts}/>))
              }
          </div>
          <hr/>
          <div>
              <PostsComponent posts={Posts}/>
          </div>
      </div>
    );
};

export default UsersComponent;