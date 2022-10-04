import ReactDOM from "react-dom/client"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./index.scss"
import MainRouter from "./app/router/router"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MainRouter />
)
