import { AxiosResponse } from 'axios'

export interface IHttpCLient {
    post: <T, R>(url: string, payload: T) => Promise<AxiosResponse<R>>
    get: <T>(url: string) => Promise<AxiosResponse<T>>

}