import { Navbar, Nav, NavDropdown} from "react-bootstrap"
import NavrBar from "./NavBar.css"
import logo from "../netflix_logo.png"

const NavBar = () => {
return(
<>
<Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home"><img src={logo} style={{width: '100px'}} /></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link  className="text-white"href="#home">Home</Nav.Link>
      <Nav.Link className="text-white" href="#features">TV Shows</Nav.Link>
      <Nav.Link  className="text-white"href="#pricing">Movies</Nav.Link>
      <Nav.Link  className="text-white"href="#pricing">Recently Added</Nav.Link>
      <Nav.Link  className="text-white"href="#pricing">MyList</Nav.Link>
    </Nav>
      <Nav.Link className="text-white" href="#pricing"><i class="fas fa-search"></i></Nav.Link>
      <Nav.Link className="text-white" href="#pricing">KIDS</Nav.Link>
      <Nav.Link  className="text-white" href="#pricing"> <i class="fas fa-bell"></i></Nav.Link>
      <Nav.Link  className="text-white" href="#pricing"> <i class="far fa-id-badge fa-lg"></i></Nav.Link>
      <NavDropdown  id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>  
      </NavDropdown>   
  </Navbar>
 
  </>
)
}

export default NavBar