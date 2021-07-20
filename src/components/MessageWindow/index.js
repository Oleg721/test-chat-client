import React, {useEffect, useState} from 'react';
import Box from "@material-ui/core/Box";
import {alpha, makeStyles} from "@material-ui/core/styles";
import Message from "./Message";
import {useSelector} from "react-redux";



const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
}));



export default ()=>{

    const [messages, setMessage] = useState([])
    useSelector(state => {
        if(messages !== state.message){
            setMessage(state.message)
        }
    })

    useEffect(() => {

    })

    return <Box display="flex"
                flexDirection="column">

        {messages.map((msg)=>{
            return <Message key={msg.id} message={msg}/>
        })}
    </Box>
}


