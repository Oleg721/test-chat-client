import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import Avatar from "@material-ui/core/Avatar";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        backgroundColor: props => props.color
    },
    userList: {
        '& .MuiListItemAvatar-root':{
            minWidth: '45px',
        }
    },

}));


export default ({login=`z`, color=`red`})=>{

    const classes = useStyles({color : color});

    return(
        <ListItemAvatar>
            <Avatar  className={classes.small}>{login[0].toUpperCase()}</Avatar>
        </ListItemAvatar>
    )

}



