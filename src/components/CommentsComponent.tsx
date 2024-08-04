import React, {FC} from 'react';
import {ICommentModel} from "../models/ICommentModel";


interface IProps{
    Comments:ICommentModel[]
}
const CommentsComponent:FC<IProps> = ({Comments}) => {
    return (
        <ul>
            {
                Comments.map(value => (<li key={value.id}>{value.id} {value.name}</li>))
            }
        </ul>
    );
};

export default CommentsComponent;