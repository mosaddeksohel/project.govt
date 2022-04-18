import { Box } from "@mui/system";
import { Button } from "bootstrap";
import React from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";

const Navigation = () => {
  const { user } = useAuth();

  return (
    <div>
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
              <NavLink href="">Home</NavLink>
              <NavLink>
                <Link to="/information">Active Status</Link>
              </NavLink>
              <Nav.Link>
                <Link to="/login">Singin</Link>
              </Nav.Link>

              <NavLink>
                <Link to="/register">Singup</Link>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
