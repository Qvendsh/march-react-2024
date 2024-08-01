import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";

interface IProps{
    Posts:IPostModel[]
}
const PostsComponent:FC<IProps> = ({Posts}) => {
    return (
        <ul>
            {
                Posts.map(value =>(<li key={value.id}>{value.id} {value.title}</li>))
            }
        </ul>
    );
};

export default PostsComponent;