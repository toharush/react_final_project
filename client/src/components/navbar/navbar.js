import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form'
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css";

function ColorSchemesExample() {
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeBackground)
    })
    return (
        <Navbar id="navbar" variant="dark" className={navbar ? "custoNavbar active" : "custoNavbar"}>
            <Navbar.Brand href="/" className='brandName'> Terminal</Navbar.Brand>
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="products">Products</Nav.Link>
                    <Form.Control type="email" placeholder="Enter email" />
                </Nav>
            </Container>
        </Navbar>
    );
}

export default ColorSchemesExample;