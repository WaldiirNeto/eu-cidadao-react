import { HttpPrivateClientService } from 'app/core/http/http-private-client.service'
import API_URL from 'app/shared/helpers/api-router.helper'
import { UrlParams } from 'app/shared/helpers/url-serach-params.helper'
import { AxiosResponse } from 'axios'
import { OcorrenciaModel } from '../models/ocorrencia.model'
import { IOcorrenciaService } from '../models/ocorrencias-service.interface'

export class OCorrenciaService implements IOcorrenciaService {

    constructor(private readonly _http: HttpPrivateClientService) { }

    public ListOcorrencia(filter: {}): Promise<AxiosResponse<OcorrenciaModel[]>> {
        const params = UrlParams(filter)
        return this._http.get(`${API_URL.OCORRENCIA_LIST + params}`)
    }
}