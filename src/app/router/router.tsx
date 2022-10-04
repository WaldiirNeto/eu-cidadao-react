import App from "../App"
import DashboardComponent from "../pages/dashboard/dashboard"
import LoginComponent from "../pages/login/Login"
import { factoryLoginService } from "../shared/factories"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RecoilRoot } from "recoil"
import PrivateRouter from "./private-router"
import PublicRouter from "./public-router"
import { factorydashboardService } from "../shared/factories"
import OcorrenciasComponent from "app/pages/ocorrencias/ocorrencias"
function MainRouter() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<PublicRouter />}>
              <Route
                path="login"
                element={<LoginComponent service={factoryLoginService()} />}
              />
            </Route>

            <Route path="/" element={<PrivateRouter />}>
              <Route path="dashboard" element={<DashboardComponent />} />
              <Route path="ocorrencias" element={<OcorrenciasComponent />} />
            </Route>

            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <span>There's nothing here!</span>
                </main>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default MainRouter
