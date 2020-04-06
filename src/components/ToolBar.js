import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    toolbar: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        marginTop: '3%',
        width: '90%',
        marginRight: '5%',
        borderRadius: '5px'
    },
    toolbarItems: {
        position: 'absolute',
        display: 'flex',
        right: 0
    },
    toolbarItemsSpan: {
        padding: '0 10px',
    }
}));

const handleClick = (data) => {
    console.log('clicked', data);
};

const items = [
    {
        id: 1,
        name: "Gallery",
        param: 'gallery',
        func: handleClick
    },
    {
        id: 2,
        name: "Contact",
        param: 'contact',
        func: handleClick
    },
];

export default function DenseAppBar() {
    const classes = useStyles();

    const toolbarItem = items.map(item => {
        return (
            <span className={classes.toolbarItemsSpan} onClick={() => item.func(item.param)}>{item.name}</span>
        );
    });

    return (
        <div className={classes.root}>
            <AppBar className={classes.toolbar} position="fixed">
                <Toolbar variant="dense">
                    <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
                        {/* <MenuIcon /> */}
                        <img width="190" src="images/brand-img.jpg" />
                    </IconButton>
                    <div className={classes.toolbarItems}>
                        {toolbarItem}
                    </div>
                    {/* <Typography variant="h6" color="inherit">
                        Shenga Films
                    </Typography> */}
                </Toolbar>
            </AppBar>
        </div>
    );
}