import { Outlet } from "react-router-dom";
import List from "./List";


export const orderRoutes =[
    {
        path: '/orders',
        element: <Outlet />,
        children: [
            {
                path: "",
                element: <List />,
              }
        ]
    }
]