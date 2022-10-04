import { atom } from 'recoil'
import { OcorrenciaModel } from '../models/ocorrencia.model'

export const ocorrenciaListAtomState = atom({
    key: 'ocorrenciaListAtomState',
    default: {
        ocorrenciaList: [] as OcorrenciaModel[],
        error: '',
        loading: true,
        totalCountPage: 0,
        currentPage: 1,
        _page: 1,
        _limit: 5,
    }
})