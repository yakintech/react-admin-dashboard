import { axiosInstance } from "./axiosInstance"

export const BaseService = {
    async getAll<T>(url: string): Promise<T> {
        try {
            let result = await axiosInstance.get<T>(url)
            return result.data
        } catch (error) {
            console.log(`Get All Error: ${url}`, error)
            throw error
        }
    },
    async delete<T>(url: string): Promise<T> {
        try {
            let result = await axiosInstance.delete<T>(url)
            return result.data
        } catch (error) {
            console.log(`Delete Error: ${url}`, error)
            throw error
        }
        
    },
    async post<T>(url: string, data: any): Promise<T> {
        try {
            let result = await axiosInstance.post<T>(url, data)
            return result.data
        } catch (error) {
            console.log(`Post Error: ${url}`, error)
            throw error
        }
    },
    async put<T>(url: string, data: any): Promise<T> {
        try {
            let result = await axiosInstance.put<T>(url, data)
            return result.data
        } catch (error) {
            console.log(`Put Error: ${url}`, error)
            throw error
        }
    }
}
