import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import { useRecoilState } from "recoil"
import { userCurrentAtomState } from "../home/atom/user.atom"
import "./navbar.scss"

function NavBarComponent() {
  const [state] = useRecoilState(userCurrentAtomState)
  return (
    <Navbar bg="light" expand="lg" className="sticky-top p-1">
      <div className="d-flex align-items-center w-100">
        <Navbar.Brand href="#home" className="p-2 flex-grow-1 fw-bold">
          {state.loading ? "..." : state.user.nomeCidade}
        </Navbar.Brand>
        <div
          className="circle-user  text-center p-2 d-none d-md-block"
          id="userDropdown"
          data-bs-toggle="dropdown"
        >
          {state.loading ? "..." : state.user.primeiroNome?.charAt(0)}
        </div>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="d-block d-md-none"
        />
        <div className="d-none d-sm-block">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-none d-sm-block d-md-none">
              <Nav.Link href="#home">Dashboard</Nav.Link>
              <Nav.Link href="#link">Ocorrências</Nav.Link>
              <Nav.Link href="#link">Relatórios</Nav.Link>
              <Nav.Link href="#link">Usuários</Nav.Link>
              <NavDropdown title="Configurações" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Categorias
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </div>
    </Navbar>
  )
}

export default NavBarComponent
