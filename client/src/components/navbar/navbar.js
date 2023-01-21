import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css";
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../../store/selectors/selectors';
import { logout } from '../../store/middlewares/auth/auth';
import { navigate } from '../../store/middlewares/router/router';
import { getCurrentPage } from '../../store/selectors/router/router';
import { routes } from '../../routes/router';

function CustomNavbar() {
    const dispatch = useDispatch();
    const [navbar, setNavbar] = useState(false);
    const user = useSelector(getCurrentUser);
    const currentPage = useSelector(getCurrentPage);

    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    const handleLogout = () => {
        dispatch(logout());
    }

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
    }, []);
    
    return (
        <div className='navbar'>
        <Navbar id="navbar" variant="dark" className={navbar ? "custoNavbar active" : "custoNavbar"} fixed='top'>
            <Navbar.Brand onClick={() => dispatch(navigate(routes.HOME))} className='brandName'> Terminal</Navbar.Brand>
            <Container>
                <Nav className="me-auto">
                    <Nav.Link active={currentPage == routes.HOME ? true : false} onClick={() => dispatch(navigate(routes.HOME))}>Home</Nav.Link>
                    <Nav.Link active={currentPage == routes.PRODUCTS ? true : false} onClick={() => dispatch(navigate(routes.PRODUCTS))}>Products</Nav.Link>
                </Nav>
                <span>{user?.email}</span>
                {user?.email && <button onClick={handleLogout}>Log out</button>}
            </Container>
        </Navbar>
        </div>
    );
}

export default CustomNavbar;