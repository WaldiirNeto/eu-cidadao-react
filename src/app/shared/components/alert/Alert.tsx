import { AlertAtomState } from "../../atoms/alert.atom"
import { Alert } from "react-bootstrap"
import { useRecoilState, useResetRecoilState } from "recoil"
import { useEffect } from "react"
import "./Alert.scss"

function AlertComponent() {
  const resetAlertState = useResetRecoilState(AlertAtomState)
  const [state, setAlertState] = useRecoilState(AlertAtomState)
  useEffect(() => resetAlertState(), [])
  const closeAlert = (): void => {
    setAlertState(obtToUpdate => ({
      ...obtToUpdate,
      type: ``,
      message: ``,
      show: false,
    }))
  }

  if (state.show) {
    return (
      <div className="d-flex justify-content-center">
        <Alert
          className="mt-2 col-md-4 d-flex align-items-center justify-content-center"
          variant={state.type}
          onClose={() => closeAlert()}
          dismissible
        >
          <span>{state.message}</span>
        </Alert>
      </div>
    )
  } else {
    return <div></div>
  }
}

export default AlertComponent
