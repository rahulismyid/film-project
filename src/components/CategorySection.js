import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ShortFilmCard from "./ShortFilmCards";
import FeatureFilmCard from "./FeatureFilmCard";


const useStyles = makeStyles(theme => ({
    cardContainer: {
        marginTop: 20,
        paddingBottom: 15
    },
    catSection: {
        background: '#eeecb4'
    },
    catgoryTitleText: {
        paddingTop: 10,
        textAlign: 'center',
        fontSize: 25
    }
}));



const CategorySection = () => {

    const classes = useStyles();

    return (
        <div id="category" className={classes.catSection}>
            <Container className={classes.cardContainer} fixed>
                <div className={classes.catgoryTitleText}>
                    <h1>Our Work</h1>
                </div>
                <Grid container justify="center" spacing={3}>
                    <Grid item xs={12} sm={6} md={4} key={1}>
                        <ShortFilmCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} key={2}>
                        <FeatureFilmCard />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default CategorySection
