import React, {useEffect, useState} from 'react';
import {ICommentModel} from "../models/ICommentModel";
import CommentsComponent from "../components/CommentsComponent";
import commentApiService from "../services/comment.api.service";

const CommentsPage = () => {
    const [comments, setComments] = useState<ICommentModel[]>([])
    useEffect(() => {
        commentApiService.getAllComments().then(value => setComments(value.data))
    }, []);
    return (
        <div>
            <CommentsComponent Comments={comments}/>
        </div>
    );
};

export default CommentsPage;