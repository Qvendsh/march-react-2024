import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";

let  axiosInstance= axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    headers:{'Content-Type': 'application/json'}
})

const userApiService ={
    getAllUsers: (): Promise<AxiosResponse<IUserModel[]>> => {
        return axiosInstance.get("/users")
    }
}

const getPostsByUserId = async (userId:number)=>{
    return await axiosInstance.get('/users/' + userId + '/posts')
        .then((response) => response.data)
}

const getCommentsByPostId = async (postId:number)=>{
    return await axiosInstance.get('/posts/' + postId + '/comments')
        .then((response) => response.data)
}


export {userApiService, getPostsByUserId, getCommentsByPostId}


