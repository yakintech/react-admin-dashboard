import { Outlet, useRoutes } from "react-router-dom";
import List from "../pages/product/List";
import Add from "../pages/product/Add";
import DashboardLayout from "../components/layout/DashboardLayout";
import { productRoutes } from "../pages/product/routes";

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
           ...productRoutes
          ]
        }
      ])
      return routes;
}