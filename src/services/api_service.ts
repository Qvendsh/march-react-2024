import axios from "axios";

let  axiosinstance= axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    headers:{'Content-Type': 'application/json'}
})

const getAllUsers = async ()=>{
   return await axiosinstance.get('/users')
       .then((response)=>response.data)
}

const getPostsOfUserById = async (id:number)=>{
    return await axiosinstance.get('/users/'+ id +'/posts')
        .then((response)=>response.data)
}

export {getAllUsers, getPostsOfUserById}