import React from 'react';
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';
import UserAvatar from '../../UserAvatar'
import {useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    message: {
        display: 'flex',

    },
    myMessage: {

    },
}));

export default function Message({value : {text, authorColor , authorLogin, UserId}, isMyMessage }){

// TODO: lift state up
//     const isMyMessage = UserId === useSelector(state => state.auth.payload?.id )
    const classes = useStyles();

    return (<React.Fragment>
        <Box display="flex"
             className={classes.message}
             alignSelf= {isMyMessage ? "flex-end" : "flex-start"}
             flexDirection="row"
             m={`3ch ${isMyMessage ? "0 0 6ch": "6ch 0 0 "}`}
             height="100%">

            <Box ml={1} mr={1} display="flex" order={isMyMessage ? 1 : 0} >
                <UserAvatar login={authorLogin} color={authorColor} />

            </Box>
            <Paper elevation={3}>
                <Box display="flex"
                     flexDirection="column"
                     justifyContent="flex-end"
                     bgcolor= {isMyMessage ? "#aed581" : "#bbdefb"}
                     alignItems={isMyMessage ? "flex-end" : "flex-start"}
                     height="100%"
                     p="0 1rem 0 1rem">
                    <Typography color={'primary'} align={isMyMessage ? "right" : "left"}>
                        {authorLogin}
                    </Typography>
                    <Typography align={isMyMessage ? "right" : "left"}>
                        {text}
                    </Typography>
                </Box>
            </Paper>
        </Box>
    </React.Fragment>)
};