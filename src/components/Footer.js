import React from 'react';
import Container from '@material-ui/core/Container';
import {
    FacebookShareButton,
    FacebookIcon,
    InstapaperShareButton,
    InstapaperIcon,
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
                            <InstapaperShareButton
                                url={shareUrl}
                                title={title}
                                className="Demo__some-network__share-button"
                            >
                                <InstapaperIcon size={32} round />
                            </InstapaperShareButton>
                        </span>
                        <span>
                            <FacebookShareButton
                                url={shareUrl}
                                quote={title}
                                className="Demo__some-network__share-button"
                            >
                                <FacebookIcon size={32} round />
                            </FacebookShareButton>
                        </span>
                    </div>
                </ul>
            </nav>
        </Container>
    )
}

export default Footer;
