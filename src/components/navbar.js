import {Navbar, Nav} from "react-bootstrap";

function NavbarFunction(){
    return(
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
         
          <Nav className="mx-auto">
            <Nav.Link href="#intro">Intro</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            
          </Nav>
          <Nav.Link className="text-light m-0 p-0 pt-2 pb-2" href="#language">Français</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
        
    )
}
export default NavbarFunction;