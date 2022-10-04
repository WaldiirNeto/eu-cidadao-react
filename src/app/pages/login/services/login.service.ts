

import { HttpPublicClientService } from 'app/core/http/http-public-client.service'
import API_URL from 'app/shared/helpers/api-router.helper'
import { AuthParamsModel } from '../models'
import { ILoginService } from '../models/login-service.interface'

export class LoginService implements ILoginService {

    constructor(private readonly _http: HttpPublicClientService) { }

    public auth(payload: AuthParamsModel): Promise<any> {
        return this._http.post(API_URL.AUTH, payload)
    }
}