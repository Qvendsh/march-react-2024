import React, {useEffect, useState} from 'react';
import {IPost} from "../../models/IPost";
import {IComment} from "../../models/IComment";
import {getAllPosts, getCommentsByPostId} from "../../services/api-service";
import PostComponent from "../postcomponent/PostComponent";
import CommentsComponent from "../commentcomponent/CommentsComponent";

const PostsComponent = () => {
    const [Posts, setPosts] = useState<IPost[]>([])
    const [Comments, setComments] = useState<IComment[]>([])

    useEffect(() => {
        getAllPosts().then((value:IPost[])=>{
            setPosts([...value])
        })
    }, []);


    const getComms =(PostId:number)=>{
        getCommentsByPostId(PostId).then(Comments=>setComments([...Comments]))
    }


    return (
        <div>
            <hr/>
            <div>
                {
                  Posts.map((Post)=>
                      (<PostComponent key={Post.id} post={Post} getComms={getComms}/>))
                }
            </div>
            <hr/>
            <div>
                <CommentsComponent comments={Comments}/>
            </div>
        </div>
    );
};

export default PostsComponent;