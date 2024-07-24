import { QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query"
import { BaseService } from "../api/baseService"
import { axiosInstance } from "../api/axiosInstance"


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

