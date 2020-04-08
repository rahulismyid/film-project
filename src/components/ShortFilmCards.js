import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
// import {
//     FacebookShareButton,
//     FacebookIcon,
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
        maxWidth: 345,
    },
});

const styles =
{
    media: {
        height: 300,
    }
};


const ShortFilmCard = () => {

    const history = useHistory();

    const classes = useStyles();
    const handleClick = () => {
        // console.log('ncdskjvd')
        history.push("/shortfilms");
    };

    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea onClick={() => handleClick()}>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="images/short_film.jpg"
                        title="Contemplative Reptile"
                        style={styles.media}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Short Film
                        </Typography>
                        {/* <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography> */}
                    </CardContent>
                </CardActionArea>
                {/* <hr /> */}
                {/* <CardActions> */}
                {/* <IconButton>
                        <ShareIcon />
                    </IconButton> */}
                {/* <IconButton aria-label="add to favorites"> */}
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
                {/* <FacebookShareButton
                            url={shareUrl}
                            quote={title}
                            className="Demo__some-network__share-button"
                        >
                            <FacebookIcon size={32} round />
                        </FacebookShareButton> */}

                {/* </IconButton>
                </CardActions> */}
            </Card>
        </div>
    )
}

export default ShortFilmCard;