import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import UserItem from "./UserItem"

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    toolbar: {
        display:`flex`,
        flexDirection: `column`,
        fontSize: `1.5rem`,
        alignItems : "center",

        '& button': {
            width: '5rem',
            margin: '0.7rem'
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
}));

export default ({userData, users, onLogout, onChangeState})=>{
    const classes = useStyles();
    return (
        <div>
            <div className={classes.toolbar} >
                Hello {userData?.login}
                <button onClick={onLogout}>LOGOUT</button>
            </div>
            <Divider />
            <List >
{/*                TODO: https://www.npmjs.com/package/reselect*/}
                {users.map(user => {
                    return <UserItem userData={userData} key={user.id} value={user} onChangeState={onChangeState}/>
                })}
            </List>
        </div>
    );
}



// function objToArr(users){
//     const arr = []
//     for(let id in users){
//         arr.push({id : id, ...users[id]})
//     }
//     return arr
// }
//
