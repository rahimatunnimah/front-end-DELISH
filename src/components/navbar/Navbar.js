import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import imageAvatar from "../../assets/avatar.png";
import { ProfileContext } from "../../context";

const Header = () => {
  const UserConsumer = React.useContext(ProfileContext);

  return (
    <>
      <Navbar fixed="top" bg="light">
        <Container>
          <Navbar.Toggle />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/" className="nav-menu">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/add-recipe" className="nav-menu">
                  Add Recipe
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/profile" className="nav-menu">
                  Profile
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Link to="/login" className="nav-menu">
                <img
                  src={imageAvatar}
                  alt="icon login"
                  className="icon-login"
                />
                {localStorage.getItem("token")
                  ? UserConsumer?.username
                  : "Login"}
              </Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
