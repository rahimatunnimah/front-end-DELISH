import React, { useContext } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import imageAvatar from "../../assets/avatar.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state?.auth);
  const { user } = useSelector((state) => state?.auth);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear();
    navigate("/");
  };

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
                {token ? (
                  <Link to="/add-recipe" className="nav-menu">
                    Add Recipe
                  </Link>
                ) : (
                  <Link to="/login" className="nav-menu">
                    Add Recipe
                  </Link>
                )}
              </Nav.Link>
              <Nav.Link>
                {token ? (
                  <Link to="/profile" className="nav-menu">
                    Profile
                  </Link>
                ) : (
                  <Link to="/login" className="nav-menu">
                    Profile
                  </Link>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {token ? (
                <NavDropdown title={user?.username} id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={handleLogout}>
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Link to="/login" className="nav-menu">
                  <img
                    src={imageAvatar}
                    alt="icon login"
                    className="icon-login"
                  />
                  Login
                </Link>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
