import { Outlet, useRoutes } from "react-router-dom";
import DashboardLayout from "../components/layout/DashboardLayout";
import { productRoutes } from "../pages/product/routes";
import { cartRoutes } from "../pages/cart/routes";
import { todosRoutes } from "../pages/todos/routes";
import { orderRoutes } from "../pages/order/routes";
import {  wrapRoutes } from "../components/auth/AuthWrapper";

export const Router = () => {
    let routes = useRoutes(
      wrapRoutes(
      [
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
           ...todosRoutes,
           ...orderRoutes
          ]
        }
      ]
    )
  
  
  )
      return routes;
}