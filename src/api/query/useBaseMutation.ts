import { QueryKey, useMutation } from "@tanstack/react-query"
import { BaseService } from "../config/baseService"


type methodType = 'POST' | 'PUT' | 'DELETE' | 'GET'


export const useBaseMutation = <T>(endpoint: string, method: methodType, mutationKey?: QueryKey, data?: any) => {

    if (mutationKey == undefined) {
        mutationKey = [endpoint]
    }


    return useMutation<T>({
        mutationKey: mutationKey,
        mutationFn: async () => {
            try {
                var response = null;
                switch (method) {
                    case "POST":
                        response = await BaseService.post<T>(endpoint, data)
                        break;
                    case "PUT":
                        response = await BaseService.put<T>(endpoint, data)
                        break;
                    case "DELETE":
                        response = await BaseService.delete<T>(endpoint)
                        break;
                    case "GET":
                        response = await BaseService.getAll<T>(endpoint)
                        break;
                    default:
                        throw new Error("Method not supported")
                }
                return response
            

            } catch (error) {
                console.log(`Error: ${endpoint}`, error)
                throw error
            }
        }
    })
}