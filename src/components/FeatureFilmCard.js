import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
// import {
//     TwitterShareButton,
//     TwitterIcon,
//     InstapaperShareButton,
//     InstapaperIcon,
//     WhatsappShareButton,
//     WhatsappIcon
// } from "react-share";

import { useHistory } from "react-router-dom";


// const shareUrl = "";
// const title = "";


const useStyles = makeStyles({
    root: {
        // maxWidth: 345,
        height: '100%',
        textAlign: 'center'
    },
});

const styles =
{
    media: {
        height: 300,
    },
    h2Style: {
        fontWeight: 300,
        fontFamily: 'sans-serif',
        fontSize: 35
    }
};

const FeatureFilmCard = () => {

    const history = useHistory();

    const classes = useStyles();
    const handleClick = () => {
        // console.log('ncdskjvd')
        history.push("/featurefilms");
    };
    return (
        <div className={classes.root} onClick={() => handleClick()}>
            {/* <div class="one_fourth">
                <div class="button-container">
                    <span>Feature Film</span>
                    <img src="https://cdn2.vectorstock.com/i/thumb-large/52/01/vintage-movie-camera-in-flat-style-isolated-on-vector-23745201.jpg" />
                </div>
            </div> */}
            <div class="img-circle">
                <div class="image-wrapper">
                    <img src="https://cdn2.vectorstock.com/i/thumb-large/52/01/vintage-movie-camera-in-flat-style-isolated-on-vector-23745201.jpg" />
                </div>
            </div>
            <div className="circle-text">
                <h3>Feature Film</h3>
            </div>
            <div>
                {/* <div className="circle">
                    <img src="https://cdn2.vectorstock.com/i/thumb-large/52/01/vintage-movie-camera-in-flat-style-isolated-on-vector-23745201.jpg" />
                </div>
                <div className="circle-text">
                    <h3>Feature Film</h3>
                </div> */}
            </div>
            {/* <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="https://cdn2.vectorstock.com/i/thumb-large/52/01/vintage-movie-camera-in-flat-style-isolated-on-vector-23745201.jpg"
                        title="Contemplative Reptile"
                        style={styles.media}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Feature Film
                        </Typography> */}
            {/* <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography> */}
            {/* </CardContent>
                </CardActionArea> */}
            {/* <hr /> */}
            {/* <CardActions>
                    <IconButton>
                        <ShareIcon />
                    </IconButton>
                    <IconButton aria-label="add to favorites"> */}
            {/* <WhatsappShareButton
                            url={"http://localhost:3000/"}
                            title={"Shenga Films"}
                            separator=":: "
                            className="Demo__some-network__share-button"
                        >
                            <WhatsappIcon size={32} round />
                        </WhatsappShareButton> */}
            {/* </IconButton>
                    <IconButton aria-label="share"> */}
            {/* <InstapaperShareButton
                            url={shareUrl}
                            title={title}
                            className="Demo__some-network__share-button"
                        >
                            <InstapaperIcon size={32} round />
                        </InstapaperShareButton> */}
            {/* </IconButton>
                    <IconButton aria-label="share"> */}
            {/* <TwitterShareButton
                            url={shareUrl}
                            quote={title}
                            className="Demo__some-network__share-button"
                        >
                            <TwitterIcon size={32} round />
                        </TwitterShareButton> */}

            {/* </IconButton> */}

            {/* <Button size="small" color="primary">
                        Share
                    </Button> */}
            {/* <Button size="small" color="primary">
                        Learn More
                    </Button> */}
            {/* </CardActions> */}
            {/* </Card> */}
        </div>
    )
}

export default FeatureFilmCard;