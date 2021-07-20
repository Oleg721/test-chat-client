import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import UserItem from "./UserItem"
import {useSelector} from "react-redux";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },

    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },


}));


export default ()=>{

    const [users, setUsers] = useState({});
    const classes = useStyles();

    useSelector(state => {
        if(users !== state.user){
            setUsers(state.user);
        }
    })


    return (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List >
                {objToArr(users).map(user => {
                    return <UserItem
                        key={user.id}
                        user={user}/>
                })}
            </List>

        </div>
    );
}



function objToArr(users){
    const arr = []
    for(let id in users){
        arr.push({id : id, ...users[id]})
    }
    return arr
}

