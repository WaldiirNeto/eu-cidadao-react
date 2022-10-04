import axios, { AxiosResponse } from 'axios'
import { IHttpCLient } from './models'

export class HttpPublicClientService implements IHttpCLient {

    get<T>(url: string): Promise<AxiosResponse<T>> {
        return axios.get<T>(url)
    }

    public post<T, R>(url: string, payload: T): Promise<AxiosResponse<R>> {
        return axios.post<R>(url, payload)
    }
}