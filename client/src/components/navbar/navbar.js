import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form'
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css";
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../../store/selectors/selectors';
import { Logout } from '../../store/middlewares/auth/auth';

function CustomNavbar() {
    const [navbar, setNavbar] = useState(false);
    const user = useSelector(getCurrentUser);
    const dispatch = useDispatch();
    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeBackground)
    });

    const handleLogout = () => {
        console.log("Logout")
        dispatch(Logout)
    }
    
    return (
        <div className='navbar'>
        <Navbar id="navbar" variant="dark" className={navbar ? "custoNavbar active" : "custoNavbar"} fixed='top'>
            <Navbar.Brand href="/" className='brandName'> Terminal</Navbar.Brand>
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="products">Products</Nav.Link>
                </Nav>
                <span>{user?.email}</span>
                {user?.email && <button onClick={() => handleLogout()}>Log out</button>}
            </Container>
        </Navbar>
        </div>
    );
}

export default CustomNavbar;