import { Outlet, useRoutes } from "react-router-dom";
import DashboardLayout from "../components/layout/DashboardLayout";
import { productRoutes } from "../pages/product/routes";
import { cartRoutes } from "../pages/cart/routes";
import { todosRoutes } from "../pages/todos/routes";

export const Router = () => {
    let routes = useRoutes([
        {
          path: '/',
          element: <>
                <DashboardLayout>
                    <Outlet/>
                </DashboardLayout>
          </>,
          children: [
           ...productRoutes,
           ...cartRoutes,
           ...todosRoutes
          ]
        }
      ])
      return routes;
}