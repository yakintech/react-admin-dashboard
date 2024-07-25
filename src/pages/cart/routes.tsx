import { Outlet } from "react-router-dom";
import List from ".";



export const cartRoutes =[
    {
        path: '/cart',
        element: <Outlet />,
        children: [
            {
                path: "",
                element: <List />,
              }
        ]
    }
]