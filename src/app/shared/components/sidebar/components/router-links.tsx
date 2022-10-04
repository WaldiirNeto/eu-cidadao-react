import "./router-links.scss"

import {
  faColumns,
  faFileSignature,
  faFile,
  faBell,
  faSun,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Collapse } from "react-bootstrap"
import { NavLink, useLocation } from "react-router-dom"
function RouterLinks() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  return (
    <ul className="list-group list-group-flush text-start mt-5">
      <li>
        <NavLink
          className={`list-group-item custom-li li-icon mt-3 ${
            location.pathname === "/dashboard" ? "active" : ""
          }`}
          to="/dashboard"
        >
          <FontAwesomeIcon icon={faColumns} /> Dashboard
        </NavLink>
      </li>

      <li>
        <NavLink
          className={`list-group-item custom-li li-icon mt-3 ${
            location.pathname === "/ocorrencias" ? "active" : ""
          }`}
          to="/ocorrencias"
        >
          <FontAwesomeIcon icon={faFileSignature} /> Ocorrências
        </NavLink>
      </li>

      <li className="list-group-item custom-li li-icon mt-3">
        <FontAwesomeIcon icon={faFile} /> Relatórios
      </li>
      <li className="list-group-item custom-li li-icon mt-3">
        <FontAwesomeIcon icon={faBell} /> Notificações
      </li>
      <li
        className="list-group-item custom-li li-icon mt-3"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <FontAwesomeIcon icon={faSun} /> Configurações
      </li>
      <Collapse in={open}>
        <li className="card card-body mt-1">Gerenciar Categorias</li>
      </Collapse>
    </ul>
  )
}
export default RouterLinks
