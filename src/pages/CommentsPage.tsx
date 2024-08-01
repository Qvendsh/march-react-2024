import React, {useState} from 'react';
import {ICommentModel} from "../models/ICommentModel";
import CommentsComponent from "../components/CommentsComponent";

const CommentsPage = () => {
    const [comments, setComments] = useState<ICommentModel[]>([])
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then(value => value.json())
        .then(value => setComments(value))
    return (
        <div>
            <CommentsComponent Comments={comments}/>
        </div>
    );
};

export default CommentsPage;