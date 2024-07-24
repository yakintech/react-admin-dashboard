import { Outlet } from "react-router-dom"
import List from "./List"
import Add from "./Add"


export const productRoutes =[
    {
        path: '/products',
        element: <Outlet />,
        children: [
            {
                path: "",
                element: <List />,
              },
              {
                path: "add",
                element: <Add />,
              }
        ]
    }
]