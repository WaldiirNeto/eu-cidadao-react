import { UserModel } from 'app/shared/models'
import { atom } from 'recoil'

export const userCurrentAtomState = atom({
    key: 'userCurrentAtomState',
    default: {
        user: {} as UserModel,
        error: '',
        loading: true
    }
})