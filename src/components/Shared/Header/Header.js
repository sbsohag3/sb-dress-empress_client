import { signOut } from "firebase/auth";
import React from "react";
import { Col, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/logo.png";

const Header = () => {
     const [user] = useAuthState(auth);
     const handleSignOut = () => {
       signOut(auth);
     };
  return (
    <Navbar collapseOnSelect expand="lg" bg="info" variant="dark" sticky="top">
      <Container className="row row-cols-4">
        <Col>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="" />
          </Navbar.Brand>
        </Col>

        <Col>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link as={Link} to="/allItems" className="text-white">
                Allitems
              </Nav.Link>

              {user && (
                <>
                  <Nav.Link as={Link} to="/additems" className="text-white">
                    Add
                  </Nav.Link>
                  <Nav.Link as={Link} to="/manageitems" className="text-white">
                    Manage
                  </Nav.Link>
                  <Nav.Link as={Link} to="/myItems" className="text-white">
                    MyItems
                  </Nav.Link>
                </>
              )}
              <Nav.Link as={Link} to="/blogs" className="text-white">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-white">
                About
              </Nav.Link>
              {user ? (
                <Nav.Link
                  onClick={handleSignOut}
                  as={Link}
                  to="/login"
                  className="text-white"
                >
                  Logout
                </Nav.Link>
              ) : (
                <Nav.Link
                  eventKey={2}
                  as={Link}
                  to="/login"
                  className="text-white"
                >
                  LogIn
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Container>
    </Navbar>
  );
};

export default Header;
