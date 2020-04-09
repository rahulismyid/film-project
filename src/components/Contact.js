import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import "../styles/Contact.css";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        // marginTop: 60
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    cardContainer: {
        // marginTop: 20
    },
    containerSection: {
        // marginTop: 40
    }
}));


const NewsLetter = () => {
    const classes = useStyles();

    const handleClick = () => {
        console.log('mdskvls');
    };

    return (
        <section id="contact-card" data-widget="section" data-container="section">
            <Container className={classes.containerSection} maxWidth="xl">
                <div className="form sign-in">
                    <h1>Contact Us</h1>
                    <label>
                        <span>Name</span>
                        <input type="text" />
                    </label>
                    <label>
                        <span>Email</span>
                        <input type="email" />
                    </label>
                    <label>
                        <span>Phone</span>
                        <input type="text" />
                    </label>
                    {/* <p class="forgot-pass">Forgot password?</p> */}
                    <button id="submitBtn" type="button" className="submit" onClick={handleClick}>Submit</button>
                    {/* <button type="button" class="fb-btn">Connect with <span>facebook</span></button> */}
                </div>

            </Container>
        </section>
    )
};

export default NewsLetter;