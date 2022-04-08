import React from "react";
import { Container, Nav, Navbar, NavLink, Button } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
              <NavLink href="">Home</NavLink>
              <Nav.Link href="">Features</Nav.Link>
              <Nav.Link href="">Pricing</Nav.Link>
              <Nav.Link to="/login">
                <Button>Singin</Button>
              </Nav.Link>

              <NavLink to="/register">Singup</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
