import axios from "axios";

const axiosinstance=axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-Type': 'application/json'}
})


const getAllPosts = async ()=>{
    return await axiosinstance.get('/posts')
        .then((response)=>response.data)
}

const getCommentsByPostId = async (PostId:number)=>{
    return await axiosinstance.get('/posts/'+ PostId +'/comments')
        .then((response)=>response.data)
}


export {getAllPosts, getCommentsByPostId}