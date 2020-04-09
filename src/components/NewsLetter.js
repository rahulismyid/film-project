import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import Avatar from '@material-ui/core/Avatar';
// import Paper from '@material-ui/core/Paper';
// import IconButton from '@material-ui/core/IconButton';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import "../styles/NewsLetter.css";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: 60
    },
    cardLeft: {
        maxWidth: 366,
        cursor: 'pointer'
    },
    cardRight: {
        maxWidth: 500,
        minHeight: 464
    },
    cardLeftHeader: {
        textAlign: 'center'
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

const styles =
{
    media: {
        height: 300,
    }
};

const NewsLetter = () => {
    const classes = useStyles();

    return (
        <section id="news-letter" className="content page-1 moto-section shenga-about-us-section" data-widget="section" data-container="section">
            <Container className={classes.cardContainer} maxWidth="xl">
                <div className="newsBoxText">
                    <div className={classes.newsLetterTitle}>
                        <h2 className="newsBoxTitle-2">
                            News Letter
                        </h2>
                    </div>
                    <div className={classes.newsLetterTitle}>
                        <h1 className="newsBoxTitle">Updating soon!</h1>
                    </div>
                    <div className="envelope">
                        <div className="paper"></div>
                    </div>
                </div>
                {/* <Paper className={classes.paper}> */}
                <Grid container justify="center" spacing={3}>
                    {/* <Grid item xs={12} sm={4} md={4}>
                        <Card elevation={0} className={classes.cardLeft}>
                            <CardMedia
                                component="img"
                                alt="Test"
                                height="140"
                                image="images/about_us.jpg"
                                style={styles.media}
                            />
                            <CardContent>
                                <Typography align="center" gutterBottom variant="h5" component="h2">
                                    Upcoming Films!
                                    </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                    </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Card elevation={0} className={classes.cardLeft}>
                            <CardMedia
                                component="img"
                                alt="Test"
                                height="140"
                                image="images/about_us.jpg"
                                style={styles.media}
                            />
                            <CardContent>
                                <Typography align="center" gutterBottom variant="h5" component="h2">
                                    Upcoming Films!
                                    </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                    </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Card elevation={0} className={classes.cardLeft}>
                            <CardMedia
                                component="img"
                                alt="Test"
                                height="140"
                                image="images/about_us.jpg"
                                style={styles.media}
                            />
                            <CardContent>
                                <Typography align="center" gutterBottom variant="h5" component="h2">
                                    Upcoming Films!
                                        </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                        </Typography>
                            </CardContent>
                        </Card>
                    </Grid> */}
                </Grid>
                {/* </Paper> */}
            </Container>
        </section >
    )
};

export default NewsLetter;