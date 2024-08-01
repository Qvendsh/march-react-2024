import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UsersComponent from "../components/UsersComponent";
import PostsComponent from "../components/PostsComponent";
import CommentsComponent from "../components/CommentsComponent";

const router=createBrowserRouter([
    {
        path:"/", element:<MainLayout/>,
        errorElement: " Love okten",
        children:[
            {path:"users", element:<UsersComponent/>},
            {path:"posts", element:<PostsComponent/>},
            {path:"comments", element:<CommentsComponent/>}
        ]
    }
])

export default router