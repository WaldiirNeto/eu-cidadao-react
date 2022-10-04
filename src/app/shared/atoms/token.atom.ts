import { atom } from 'recoil'

export const TokenAtomState = atom(
    {
        key: `TokenState`,
        default: {
            token: localStorage.getItem('tokenEuCidadao')
        }
    }
)