import React from 'react';
import Container from '@material-ui/core/Container';
import {
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon
} from "react-share";
import "../styles/Footer.css";

const shareUrl = "https://shengafilms.web.app/";
const title = "a Shenga Films Arpisuva";

const Footer = () => {
    return (
        <Container className="sg-footer-container" maxWidth="xl">
            <nav className="menu">
                <ul className="main-menu footer-left">
                    <span>Shenga Films &copy; 2020</span>
                </ul>
                <ul className="main-menu footer-right">
                    <div className="share-icons">
                        <span>
                            <WhatsappShareButton
                                url={shareUrl}
                                title={title}
                                separator=" "
                                className="Demo__some-network__share-button"
                            >
                                <WhatsappIcon size={32} round />
                            </WhatsappShareButton>
                        </span>
                        <span>
                            <TwitterShareButton
                                url={shareUrl}
                                quote={title}
                                className="Demo__some-network__share-button"
                            >
                                <TwitterIcon size={32} round />
                            </TwitterShareButton>
                        </span>
                    </div>
                </ul>
            </nav>
        </Container>
    )
}

export default Footer;
