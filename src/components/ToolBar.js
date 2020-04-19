import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon
} from "react-share";
// import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import "../styles/Toolbar.css";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    toolbarItems: {
        position: 'absolute',
        display: 'flex',
        right: 0
    },
    toolbarItemsSpan: {
        padding: '0 10px',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        '&:hover': {
            color: '#ccc',
            background: 'rgba(0, 0, 0, 0.0)',
            borderRadius: '4',
            height: '10%'
        }
    }
}));

const handleClick = (data) => {
    const anchor = document.querySelector('#' + data);
    if (anchor)
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
};

const items = [
    {
        id: 1,
        name: "News Letter",
        param: 'newsletter',
        scrollId: "news-letter",
        func: handleClick
    },
    {
        id: 2,
        name: "About",
        param: 'about',
        scrollId: "about-card",
        func: handleClick
    },
    {
        id: 3,
        name: "Our Work",
        param: 'ourwork',
        scrollId: "category",
        func: handleClick
    },
    {
        id: 4,
        name: "Contact",
        param: 'contact',
        scrollId: "contact-card",
        func: handleClick
    }
];

const shareUrl = "https://shengafilms.web.app/";
const title = "a Shenga Films Arpisuva";

export default function DenseAppBar() {
    const classes = useStyles();
    const history = useHistory();

    const goHome = () => {
        history.push("/");
    };

    const isHome = (history.location.pathname === "/") ? true : false;

    const shareicons = (
        <div className="header-share-icons">
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
                <TwitterShareButton
                    url={shareUrl}
                    quote={title}
                    className="Demo__some-network__share-button"
                >
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
            </span>
        </div>
    );

    let toolbarItem = items.map((item) => {
        return (
            <span key={item.id} className={classes.toolbarItemsSpan} onClick={() => item.func(item.scrollId)}>{item.name}</span>
        );
    });

    return (
        <div className={classes.root}>
            <AppBar className="toolbar" position="fixed">
                <Toolbar variant="dense">
                    <IconButton justify="center" onClick={goHome} edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
                        {/* <MenuIcon /> */}
                        <img className="brandImg" width="190" alt="brand" src="images/brand-img.jpg" />
                    </IconButton>

                    {isHome ?
                        <div className={classes.toolbarItems, "showToolbarItems"}>
                            {toolbarItem}{shareicons}
                        </div>
                        : ""}
                    {/* <Typography variant="h6" color="inherit">
                        Shenga Films
                    </Typography> */}
                </Toolbar>
            </AppBar>
        </div>
    );
}