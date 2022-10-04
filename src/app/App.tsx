import { Outlet } from "react-router-dom"
import "./App.css"
import AlertComponent from "./shared/components/alert/Alert"
function App() {
  return (
    <main className="h-100">
      <AlertComponent />
      <Outlet />
    </main>
  )
}

export default App
