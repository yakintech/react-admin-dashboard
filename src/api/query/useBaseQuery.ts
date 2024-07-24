import { QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query"
import { BaseService } from "../config/baseService"
import { axiosInstance } from "../config/axiosInstance"


export const useBaseQuery = <T>(endpoint: string, key?: QueryKey, options?: UseQueryOptions) => {

    if(key === undefined) {
        key = [endpoint]
    }

    return useQuery<T>({
        queryKey: key,
        queryFn: async () => {
            const response = await BaseService.getAll<T>(endpoint)
            return response
        }
    })

}

