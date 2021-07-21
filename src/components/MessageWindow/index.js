import React, {useEffect, useRef, useState} from 'react';
import Box from "@material-ui/core/Box";
import {alpha, makeStyles} from "@material-ui/core/styles";
import Message from "./Message";
import {useSelector} from "react-redux";
import {MessageWindow} from "../index";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

    content: {
        flexGrow: 1,
        padding: theme.spacing(1 ,3),
        height: `93vh`,
        overflow: "auto",
        backgroundColor: '#eceff1'
    },
}));


export default ()=>{

    const classes = useStyles();
    const [messages, setMessage] = useState([])
    // TODO: remove extra state
    useSelector(state => {
        if(messages !== state.message){
            setMessage(state.message)
        }
    })
    const ref = useRef(null);

    useEffect(() => {
        ref.current.scrollTop = 9999
    })

    return (
            <main ref={ref} className={classes.content}>
                <Box display="flex"
                     flexDirection="column">

                    {messages.map((msg)=>{
                        return <Message key={msg.id} message={msg}/>
                    })}
                </Box>
            </main>
        )


}


