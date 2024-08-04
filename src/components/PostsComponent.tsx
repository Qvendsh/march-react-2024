import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";
import {Link} from "react-router-dom";

interface IProps{
    Posts:IPostModel[]
}
const PostsComponent:FC<IProps> = ({Posts}) => {
    return (
        <ul>
            {
                Posts.map(value =>(<li key={value.id}>
                  <Link to={value.id.toString()} state={value}>  {value.id} {value.title} </Link>
                </li>))
            }
        </ul>
    );
};

export default PostsComponent;