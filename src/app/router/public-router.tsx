import { Navigate, Outlet, RouteProps } from "react-router-dom"

function PublicRouter(props: RouteProps): React.ReactElement | null {
  const auth = localStorage.getItem("tokenEuCidadao")
  return !auth ? <Outlet /> : <Navigate to="/dashboard" />
}

export default PublicRouter
