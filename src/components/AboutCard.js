import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import "../styles/AboutCard.css";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: 60
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    cardContainer: {
        marginTop: 20
    },
    containerSection: {
        marginTop: 40
    }
}));


const NewsLetter = () => {
    const classes = useStyles();

    return (
        <section id="about-card" class="content page-1 moto-section shenga-about-us-section" data-widget="section" data-container="section">
            <Container className={classes.containerSection} maxWidth="xl">
                {/* <Paper className={classes.paper}> */}
                <div className="sg-nl-title">
                    {/* <h2 class="moto-text_system_6" style="text-align: center;">ABOUT US</h2> */}
                    <h1>ABOUT US</h1>
                </div>
                <div className="sg-nl-sub-title">
                    {/* <p class="moto-text_system_10" style="text-align: center;"> */}
                    <p>
                        Shenga Films was founded by Hrishikesh Sangli in 2014.
                        </p>
                    <div class="circle">
                        {/* <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Chapultepec_Zoo_-_Jaguar_%2802%29.jpg/2560px-Chapultepec_Zoo_-_Jaguar_%2802%29.jpg" /> */}
                        <img width="100" data-src="https://cdn.pixabay.com/photo/2018/02/01/18/39/trump-3123765_960_720.png" class="moto-widget-image-picture lazyloaded" data-id="33" title="" alt="" src="https://cdn.pixabay.com/photo/2018/02/01/18/39/trump-3123765_960_720.png" />
                    </div>
                </div>
                {/* </Paper> */}
            </Container>
        </section>
    )
};

export default NewsLetter;