import { Outlet } from "react-router-dom"
import SidebarComponent from "../sidebar/sidebar"
import NavBarComponent from "../navbar/navbar"

function HomeComponent() {
  return (
    <div className="d-flex">
      <SidebarComponent></SidebarComponent>
      <div className="p-2 flex-grow-1 align-self-start">
        <NavBarComponent />
        <section style={{ height: "90vh" }}>
          <div
            className="overflow-auto justify-content-sm-center mt-2"
            style={{ height: "100%" }}
          >
            <Outlet />
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomeComponent
