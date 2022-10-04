import { AlertAtomState } from 'app/shared/atoms/alert.atom'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
type CallBackType = (error: AxiosError) => void
export const errorGlobal = (callback: CallBackType): any => {
    const [alertState, setAlertState] = useRecoilState(AlertAtomState)
    const router = useNavigate()
    return (error: AxiosError): void => {
        if (error.response?.status === 401) {
            localStorage.removeItem('tokenEuCidadao')
            router('/login')
        } else {
            callback(error)
            setAlertState(obtToUpdate => ({
                ...obtToUpdate,
                type: `danger`,
                message: error.message,
                show: true,
            }))
        }
    }
}

