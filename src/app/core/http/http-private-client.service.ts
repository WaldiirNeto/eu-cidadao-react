import axios, { AxiosResponse } from 'axios'
import { IHttpCLient } from './models'
export class HttpPrivateClientService implements IHttpCLient {

    public post<T, R>(url: string, payload: T): Promise<AxiosResponse<R>> {
        return axios.post(url, payload)
    }

    public get<T>(url: string): Promise<AxiosResponse<T>> {
        const token = localStorage.getItem('tokenEuCidadao') as string
        return axios.get<T>(url, { headers: { 'Authorization': `Bearer ${token}` } })
    }
}