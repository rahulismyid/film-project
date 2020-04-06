import React from 'react';
import Container from '@material-ui/core/Container';
import "../styles/Footer.css";

const Footer = () => {
    return (
        <Container className="sg-class-container" maxWidth="xl">
            <nav className="menu">
                <ul className="main-menu footer-center">
                    <span>Shenga Films &copy; 2020</span>
                </ul>
            </nav>
        </Container>
    )
}

export default Footer
