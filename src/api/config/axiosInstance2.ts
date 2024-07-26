import axios from "axios";


export const axiosInstance2 = axios.create({
    baseURL: "http://localhost:8080"
})


//token request interceptor

// axiosInstance2.interceptors.request.use(function (config) {
   
//     let token = localStorage.getItem("token")
//     if(token){
//         config.headers
//         config.headers["Authorization"] = `Bearer ${token}`
//     }


//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });
