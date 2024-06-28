import React, {FC} from 'react';
import {IPost} from "../../models/IPost";

interface IProps {
    post: IPost,
    getComms: (id: number) => void
}

const PostComponent:FC<IProps> = ({post,getComms}) => {
    return (
        <div>
            {post.id} {post.title} - <button onClick={()=>{
                getComms(post.id)
        }}>show comments of this post</button>
        </div>
    );
};

export default PostComponent;