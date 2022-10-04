import { AxiosResponse } from 'axios'
import { OcorrenciaModel } from './ocorrencia.model'

export interface IOcorrenciaService {
    ListOcorrencia: (filter: {}) => Promise<AxiosResponse<Array<OcorrenciaModel>>>
}