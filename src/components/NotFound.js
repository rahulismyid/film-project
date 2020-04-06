import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/NotFound.css";
// import PageNotFound from '../assets/images/PageNotFound';



const NotFound = () => {

    return (
        <div>
            <div id="notfound">
                <div class="notfound">
                    <div class="notfound-404">
                        <h1>4<span>0</span>4</h1>
                    </div>
                    <h2>the page you requested could not be found</h2>
                    {/* <form class="notfound-search">
                        <input type="text" placeholder="Search..." />
                        <button type="button"><span></span></button>
                    </form> */}
                    <center><Link to="/">Return to Home Page</Link></center>
                </div>
            </div>
            {/* <img src={PageNotFound} style={{ width: 400, height: 400, display: 'block', margin: 'auto', position: 'relative' }} /> */}
        </div>
    );
};

export default NotFound;