import { Navigate } from "react-router-dom"
import { factoryUserService } from "../../app/shared/factories"
import Shell from "../../app/shared/shell/shell"

function PrivateRouter(): React.ReactElement | null {
  const auth = localStorage.getItem("tokenEuCidadao")
  return auth ? (
    <section>
      <Shell service={factoryUserService()} />
    </section>
  ) : (
    <Navigate to="/login" />
  )
}

export default PrivateRouter
