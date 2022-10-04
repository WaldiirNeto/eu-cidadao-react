import { AxiosResponse } from 'axios'
import { UserModel } from './user.model'

export interface IUserService {
    getUser: () => Promise<AxiosResponse<UserModel>>
}