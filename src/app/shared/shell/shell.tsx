import { useEffect } from "react"
import { useRecoilState, useResetRecoilState } from "recoil"
import HomeComponent from "../components/home/home"
import { userCurrentAtomState } from "../components/home/atom/user.atom"
import { IUserService } from "../models"
import { errorGlobal } from "app/global/error.global"

interface Props {
  service: IUserService
}
function Shell({ service }: Props) {
  const resetUserState = useResetRecoilState(userCurrentAtomState)
  const [{}, setState] = useRecoilState(userCurrentAtomState)
  const errorResponse = errorGlobal((error: any) => {
    setState(old => ({ ...old, error: error }))
  })
  useEffect(() => resetUserState(), [])
  useEffect(() => {
    service
      .getUser()
      .then(user => {
        setState(objCurrent => ({
          ...objCurrent,
          loading: false,
          user: user.data,
        }))
      })
      .catch(errorResponse)
  }, [])

  return <HomeComponent />
}
export default Shell
