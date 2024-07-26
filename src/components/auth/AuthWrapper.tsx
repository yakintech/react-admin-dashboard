import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { axiosInstance2 } from "../../api/config/axiosInstance2";


export const AuthWrapper = ({ children }: any) => {

    const [isLogin, setisLogin] = useState(false)
    const [loading, setloading] = useState(true);


    let dispatch = useDispatch()

    useEffect(() => {
      
        let token = localStorage.getItem("token")
        if (token) {
            console.log("token var")
           axiosInstance2.get("/check").then(res => {
                setisLogin(true)
                setloading(false)
            }
            ).catch(err => {
                localStorage.removeItem("token")
                setisLogin(false)
                setloading(false)
                dispatch({ type: "auth/logout" })
            })
        }
        else{
            setloading(false)
        }
      

    }, [children])
    

    if (loading) {
        return <></>
    }
    else{
        if (isLogin) {
            return <>{children}</>
        }
        else{
            return <></>
        }
    }

}

export const wrapRoutes = (routes: any) => {
    return routes.map((route:any) => {
        return {
            ...route,
            element: <AuthWrapper role={route.role}>{route.element}</AuthWrapper>
        };
    });
}
