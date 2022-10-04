import { HttpPrivateClientService } from 'app/core/http/http-private-client.service'
import { AxiosResponse } from 'axios'
import API_URL from '../../../helpers/api-router.helper'
import { IUserService, UserModel } from '../../../models'

export class UserService implements IUserService {
    constructor(private readonly _http: HttpPrivateClientService) { }

    public getUser(): Promise<AxiosResponse<UserModel>> {
        return this._http.get<UserModel>(API_URL.USER)
    }

}