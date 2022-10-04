import { atom } from 'recoil'

export const loginAtomState = atom(
    {
        key: `loginState`,
        default: {
            loading: false,
            isError: false
        }
    }
)