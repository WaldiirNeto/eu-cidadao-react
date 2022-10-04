import { useRecoilState } from "recoil"
import { userCurrentAtomState } from "../home/atom/user.atom"
import RouterLinks from "./components/router-links"

function SidebarComponent() {
  const [state] = useRecoilState(userCurrentAtomState)
  return (
    <div
      className="sticky-top d-flex flex-column flex-shrink-0 p-3 bg-light d-none d-md-block"
      style={{ width: "280px", minHeight: "calc(100vh - 1px)" }}
    >
      <div className="container text-center">
        <div className="d-flex flex-column align-items-center">
          <div className="p-2">
            <img src="src/assets/images/logo-text.svg"></img>
          </div>
          <div className="p-2">
            <div className="circle-user  text-center p-2 d-none d-md-block">
              {state.loading ? "..." : state.user.primeiroNome?.charAt(0)}
            </div>
          </div>
          <div className="p-2" style={{ fontSize: "14px" }}>
            {state.user.primeiroNome}
          </div>
          <div style={{ fontSize: "14px" }}>
            {state.user.grupo?.charAt(0).toUpperCase()}
            {state.user.grupo?.slice(1)}
          </div>
          <div className="p-2 w-100">
            <RouterLinks />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarComponent
