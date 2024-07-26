import axios from "axios";
import { storageService } from "../../utils/storage/StorageHelper";

export const axiosInstance2 = axios.create({
    baseURL: "http://localhost:8080"
})

//token request interceptor
axiosInstance2.interceptors.request.use(
    (config) => {
        let token = storageService.get("token")
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    }
)

//token response interceptor
axiosInstance2.interceptors.response.use(
    (res) => {
        return res
    },
    (error) => {
        if (error.response.status == 401) {
            storageService.remove("token")
            window.location.href = "/"
        }
        return Promise.reject(error)
    }
)
