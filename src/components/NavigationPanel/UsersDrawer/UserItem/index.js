import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import UserAvatar from '../../../UserAvatar'


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



export default ({user})=>{

    const classes = useStyles({color : user.color});


    return(
        <ListItem className={classes.userList} button>

            <ListItemAvatar>
                    <UserAvatar login={user.login} color={user.color}/>
            </ListItemAvatar>
            <ListItemText primary={user.login} />
        </ListItem>
    )
}