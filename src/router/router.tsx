import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";
import UserPage from "../pages/UserPage";
import PostPage from "../pages/PostPage";

const router=createBrowserRouter([
    {
        path:"/", element:<MainLayout/>,
        errorElement: " Love okten",
        children:[
            {path:"users", element:<UsersPage/>, children:[
                    {path: ":id", element: <UserPage/>}
                ]},
            {path:"posts", element:<PostsPage/>, children: [
                    {path:":id", element: <PostPage/>}
                ]},
            {path:"comments", element:<CommentsPage/>}
        ]
    }
])

export default router