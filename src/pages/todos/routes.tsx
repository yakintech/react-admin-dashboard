import { Outlet } from "react-router-dom";
import List from ".";



export const todosRoutes =[
    {
        path: '/todos',
        element: <Outlet />,
        children: [
            {
                path: "",
                element: <List />,
              }
        ]
    }
]