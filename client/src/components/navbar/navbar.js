import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../store/selectors/selectors";
import { logout } from "../../store/middlewares/auth/auth";
import { navigate } from "../../store/middlewares/router/router";
import { getCurrentPage } from "../../store/selectors/router/router";
import { routes } from "../../routes/router";
import { isAdmin } from "../../store/selectors/selectors";

function CustomNavbar() {
  const dispatch = useDispatch();
  const [navbar, setNavbar] = useState(false);
  const user = useSelector(getCurrentUser);
  const admin = useSelector(isAdmin);
  const currentPage = useSelector(getCurrentPage);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div className="navbar">
      <Navbar
        id="navbar"
        variant="dark"
        className={navbar ? "custoNavbar sliceNavbar" : "custoNavbar"}
        fixed="top"
      >
        <Navbar.Brand
          onClick={() => dispatch(navigate(routes.HOME))}
          className="brandName"
        >
          {" "}
          Terminal
        </Navbar.Brand>
        <Container>
          <Nav className="me-auto">
            <Nav.Link
              className="Link"
              active={currentPage == routes.HOME ? true : false}
              onClick={() => dispatch(navigate(routes.HOME))}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="Link"
              active={currentPage == routes.PRODUCTS ? true : false}
              onClick={() => dispatch(navigate(routes.PRODUCTS))}
            >
              Products
            </Nav.Link>
            {!user && (
              <Nav.Link
                className="Link"
                active={currentPage == routes.AUTH ? true : false}
                onClick={() => dispatch(navigate(routes.AUTH))}
              >
                Auth
              </Nav.Link>
            )}
            {admin && (
              <Nav.Link
                className="Link"
                active={currentPage == routes.ADMIN ? true : false}
                onClick={() => dispatch(navigate(routes.ADMIN))}
              >
                Admin
              </Nav.Link>
            )}
          </Nav>
          <span>{user?.email}</span>
          {user?.email && <button onClick={handleLogout}>Log out</button>}
        </Container>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
