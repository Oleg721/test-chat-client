import React, {useEffect, useRef, useState} from 'react';
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Message from "./Message";

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(1, 3),
        height: '93vh',
        overflow: "auto",
        backgroundColor: '#eceff1'
    },
}));

export default function MessageWindow({authorId ,value: messages}){
    const classes = useStyles();
    const ref = useRef(null);
    useEffect(() => {
        ref.current.scrollTop = 9999;
    })
    return (
        <main ref={ref} className={classes.content}>
            <Box display="flex"
                 flexDirection="column">
                {messages.map((msg) => {
                    console.log(msg)
                    return <Message key={msg.id} value={msg} isMyMessage={msg.id !== authorId} />
                })}
            </Box>
        </main>
    )
}


