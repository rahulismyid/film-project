import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import filmsList from "../json/films.json";

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
        marginBottom: 50
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    cardContainer: {
        marginTop: 100
    }
}));

const styles =
{
    media: {
        height: 300,
    }
};

const ShortFilmListing = () => {
    const classes = useStyles();

    const list = filmsList.map(item => {
        return (
            <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="iframe"
                            alt={item.title}
                            height="140"
                            src={item.link}
                            title={item.title}
                            style={styles.media}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {item.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {item.desc}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {/* <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button> */}
                        </CardActions>
                    </CardActionArea>
                </Card>
            </Grid>
        )
    });

    return (
        <div>
            <Container className={classes.cardContainer} maxWidth="xl">
                <br />
                <br />
                <Grid container spacing={3}>
                    <Grid item xs>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={0} className={classes.paper}>Short Films</Paper>
                    </Grid>
                    <Grid item xs>
                    </Grid>
                </Grid>
                <Grid container item spacing={3}>
                    {list}
                </Grid>
            </Container>
        </div>
    )
}

export default ShortFilmListing
