import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import UserStateSelect from "./UserStateSelect"
import ListItemText from "@material-ui/core/ListItemText";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import UserAvatar from '../../../UserAvatar'
import Box from "@material-ui/core/Box";
import {useSelector} from "react-redux";


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

export default ({userData, value: user, onChangeState})=>{
    const classes = useStyles({color : user.color});
    return(
        <ListItem className={classes.userList} >
            <ListItemAvatar>
                <UserAvatar login={user.login} color={user.color}/>
            </ListItemAvatar>
            <Box display="flex" flexDirection="column">
                <ListItemText primary={user.login} />
                {userData.role === "ADMIN" &&
                userData.id !== +user.id &&
                <UserStateSelect state={user.state} onChangeState={onChangeState}/>}
            </Box>
        </ListItem>
    )
}