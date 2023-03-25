import Main from "../layout/Main";
import AddNewTask from "../pages/AddNewTask";
import EditTask from "../pages/EditTask";
import Home from "../pages/Home";

const { createBrowserRouter } = require("react-router-dom");


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addNew",
                element: <AddNewTask></AddNewTask>
            },
            {
                path: "/editTask/:id",
                element: <EditTask></EditTask>
            }
        ]
    }
])