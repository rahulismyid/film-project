import React from 'react';
import ImageGallery from 'react-image-gallery';
import "../styles/header.css";


const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];


const Header = () => {
    return (
        <>
            {/* <div className="header-container">
                <div className="title">
                    <h3>a Shenga Films Arpisuva</h3>
                </div>
                <div className="text">
                    <p>test</p>
                </div>
            </div> */}
            <ImageGallery items={images} useBrowserFullscreen />;
        </>
    )
}

export default Header;