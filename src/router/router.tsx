import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PostsComponent from "../components/PostsComponent";
import CommentsComponent from "../components/CommentsComponent";
import UsersPage from "../pages/UsersPage";

const router=createBrowserRouter([
    {
        path:"/", element:<MainLayout/>,
        errorElement: " Love okten",
        children:[
            {path:"users", element:<UsersPage/>},
            {path:"posts", element:<PostsComponent/>},
            {path:"comments", element:<CommentsComponent/>}
        ]
    }
])

export default router