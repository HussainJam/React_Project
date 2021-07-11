import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button
} from "reactstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "../App.css";
import Login from "./Login";



class NavbarMain extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar
          color="faded"
          dark
          expand="md"
          fixed={`top`}
          className="navDark"
        >
          <Container>
            <NavbarBrand href="#">Pakistan Tourism</NavbarBrand>
           { // <NavbarToggler onClick={this.toggle} />
          }
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#packageBody">Package</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#servicesBody">Services</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#contactBody">Contact</NavLink>
                </NavItem>
                <Button color="success"> <Link className="nav-link" to="/login">Login</Link></Button>{" "} 

              </Nav>
            </Collapse>
          </Container>
        </Navbar>
       
      </div>
      
    );
  }
}

export default NavbarMain;
