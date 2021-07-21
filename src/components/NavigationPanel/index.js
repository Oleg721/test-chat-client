import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import React, {useState} from "react";
import {alpha, makeStyles} from "@material-ui/core/styles";
import UsersDrawer from "./UsersDrawer"

const drawerWidth = 240;
// const container = window !== undefined ? () => window().document.body : undefined;


const useStyles = makeStyles((theme) => ({

    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },

    drawerPaper: {
        width: drawerWidth,
    },


}));


export default ({mobileOpen, handleDrawerToggle, container})=>{

    const [users, setUsers] = useState([]);
    const classes = useStyles();


    return (<nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
            <Drawer
                // container={container}
                variant="temporary"
                // anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                    paper: classes.drawerPaper,
                }}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                <UsersDrawer/>
            </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
            <Drawer
                classes={{
                    paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
            >
                <UsersDrawer/>
            </Drawer>
        </Hidden>
    </nav>)
}