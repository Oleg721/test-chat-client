import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import {alpha, makeStyles} from "@material-ui/core/styles";
import { flexbox } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';
import Message from "./Message";
const useStyles = makeStyles((theme) => ({

    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },


}));


export default ({messagesArr})=>{

    return <Box display="flex"
                flexDirection="column">
        {messagesArr.map((msg)=>{
            return <Message key={msg.login} isMyMessage={msg.id === 2} message={msg.text} login={msg.login}/>
        })}
    </Box>
}


