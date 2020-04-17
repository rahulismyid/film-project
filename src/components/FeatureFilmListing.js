import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/FeatureFilmListing.css";

import {
    FacebookShareButton,
    FacebookIcon,
    InstapaperShareButton,
    InstapaperIcon,
    WhatsappShareButton,
    WhatsappIcon
} from "react-share";


const shareUrl = "https://shengafilms.web.app/";
const title = "a Shenga Films Arpisuva";

const FeatureFilmListing = () => {
    return (
        <div>
            <div id="ff-listing">
                <div class="ff-listing">
                    <div class="ff-listing-404">
                        <h1><span>Coming Soon!</span></h1>
                        {/* <h1>4<span>0</span>4</h1> */}
                    </div>
                    <h2>Follow us here to get latest updates!</h2>
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
                                url={'https://www.instagram.com/shengafilms/'}
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
                    {/* <form class="ff-listing-search">
                        <input type="text" placeholder="Search..." />
                        <button type="button"><span></span></button>
                    </form> */}
                    <center><Link to="/">Return to Home Page</Link></center>
                </div>
            </div>
        </div>
    )
}

export default FeatureFilmListing
