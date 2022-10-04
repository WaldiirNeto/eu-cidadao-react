import { AxiosResponse } from 'axios'
import { AuthParamsModel } from './auth-params.model'
import { ResponseAuthParamsModel } from './auth-response.model'

export interface ILoginService {
    auth: (params: AuthParamsModel) => Promise<AxiosResponse<ResponseAuthParamsModel>>
}