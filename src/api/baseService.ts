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
        
    }
}
