import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { axiosInstance2 } from "../../api/config/axiosInstance2";
import { storageService } from "../../utils/storage/StorageHelper";


export const AuthWrapper = ({ children }: any) => {

    const [isLogin, setisLogin] = useState(false)
    const [loading, setloading] = useState(true);


    let dispatch = useDispatch()

    //her sayfa değiştiğinde /check endpointe gidip token kontrolü yapıyorum ve sonrasında store güncelliyorum ( dispatch ile )
    useEffect(() => {

        let token = storageService.get("token")
        if (token) {
            axiosInstance2.get("/check").then((res: any) => {
                setisLogin(true)
                setloading(false)
                dispatch({ type: "auth/login", payload: { id: res.data.id, email: res.data.email, roles: res.data.roles } })
            }
            ).catch(err => {
                storageService.remove("token")
                setisLogin(false)
                setloading(false)
                dispatch({ type: "auth/logout" })
            })
        }
        else {
            setloading(false)
        }


    }, [])


    if (loading) {
        return <></>
    }
    else {
        if (isLogin) {
            return <>{children}</>
        }
        else {
            return <></>
        }
    }

}

export const wrapRoutes = (routes: any) => {
    return routes.map((route: any) => {
        return {
            ...route,
            element: <AuthWrapper role={route.role}>{route.element}</AuthWrapper>
        };
    });
}
