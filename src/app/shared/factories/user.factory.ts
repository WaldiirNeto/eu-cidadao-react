import { HttpPrivateClientService } from '../../../app/core/http/http-private-client.service'
import { IUserService } from '../models'
import { UserService } from '../components/home/services/user.service'

export const factoryUserService = (): IUserService =>
    new UserService(new HttpPrivateClientService())