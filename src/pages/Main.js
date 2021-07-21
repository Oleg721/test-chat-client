import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {NavigationPanel,
        MessageWindow,
        UserToolBar} from '../components'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        top: 'auto',
        bottom: 0,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
}));

function Main(props) {
    // TODO: window ??"?
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // TODO ???
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <UserToolBar handleDrawerToggle={handleDrawerToggle} />
            </AppBar>
            <NavigationPanel
                mobileOpen={mobileOpen}
                container={container}
                handleDrawerToggle={handleDrawerToggle}
            />

                <MessageWindow/>

        </div>
    );
}



export default Main;
