import { HttpPublicClientService } from '../../../app/core/http/http-public-client.service'
import { ILoginService } from '../../../app/pages/login/models'
import { LoginService } from '../../../app/pages/login/services/login.service'

export const factoryLoginService = (): ILoginService =>
    new LoginService(new HttpPublicClientService())