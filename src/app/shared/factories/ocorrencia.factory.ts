import { IOcorrenciaService } from 'app/pages/ocorrencias/models/ocorrencias-service.interface'
import { OCorrenciaService } from 'app/pages/ocorrencias/services/ocorrencias.service'
import { HttpPrivateClientService } from '../../../app/core/http/http-private-client.service'

export const factoryOcorrenciaService = (): IOcorrenciaService =>
    new OCorrenciaService(new HttpPrivateClientService())