import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import UsersDrawer from "./UsersDrawer"

const drawerWidth = 240;
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

export default ({mobileOpen, handleDrawerToggle, userData, users, onLogout, onChangeState})=>{

    const classes = useStyles();
    return (<nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                    paper: classes.drawerPaper,
                }}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}>

                <UsersDrawer userData={userData} users={users} onLogout={onLogout} onChangeState={onChangeState}/>
            </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
            <Drawer
                classes={{
                    paper: classes.drawerPaper,
                }}
                variant="permanent"
                open>
                <UsersDrawer userData={userData} users={users} onLogout={onLogout} onChangeState={onChangeState}/>
            </Drawer>
        </Hidden>
    </nav>)
}