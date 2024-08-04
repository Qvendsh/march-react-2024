import axios, {AxiosResponse} from "axios";
import {IPostModel} from "../models/IPostModel";

let axiosInstance= axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    headers:{'Content-Type': 'application/json'}
})

const postApiService = {
    getAllPosts: (): Promise<AxiosResponse<IPostModel[]>> =>{
        return axiosInstance.get("/posts")
    }
}

export default postApiService;