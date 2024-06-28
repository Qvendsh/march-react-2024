import React, {FC} from 'react';
import {IComment} from "../../models/IComment";

interface ICommentType{
    comments:IComment[]
}
const CommentsComponent:FC<ICommentType> = ({comments}) => {
    return (
        <ul>
            {
             comments.map((comment)=>
                 <li key={comment.Id}>
                     {comment.PostId}{comment.Id}{comment.name}</li>)
            }
        </ul>
    );
};

export default CommentsComponent;