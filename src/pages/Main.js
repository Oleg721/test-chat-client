import React, {useContext, useEffect, useRef, useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {NavigationPanel, MessageWindow, UserToolBar} from '../components'
import {removeUser, getUsers, addUser} from '../handlers/userHandlers'
import {getMessage, addMessage} from '../handlers/messageHandlers'
import SocketContext from "../components/Context";
import {io} from "socket.io-client";
import {useHistory} from "react-router-dom";
import {actionAuthLogin, actionAuthLogout, actionSocketDisconnect} from "../actions";
import {useDispatch, useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
}));

export default function Main() {
    const [socket, setSocket] = useState(null);
    const token = localStorage.getItem(`authToken`);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const users = useSelector(state => {
         return  Object.entries(state.users)
             .reduce((accumulator,item,index,arr)=>{
                 accumulator.push({id: item[0],...item[1]})
                 return accumulator
         },[])
     });
    const userData = useSelector(state => state.auth.payload) || {};
    const messages = useSelector(state => state.messages);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isDisabled, setDisabled] = useState(useSelector(state => state.auth.payload?.state === 'MUTED'));

    function handleDrawerToggle(){
        setMobileOpen(!mobileOpen);
    }
    function clickHandle(text) {
        socket.emit('message:add', text, userData.id);
        setDisabled(true);
        setTimeout(()=> setDisabled(false), 20000);
    }
    function logoutHandle() {
        dispatch(actionAuthLogout());
        socket.disconnect(true);
    }
    function changeStateHandle(state) {
        socket.emit('user:setState', userData.id, state);
    }

    useEffect(() => {
        const options = {transports: ["websocket"], auth: {token}};
        const socket = io(`http://${process.env.REACT_APP_SOCKET_HOST}:${process.env.REACT_APP_SOCKET_PORT}/`, options);
        socket.on('messages', getMessage);
        socket.on('message:add', addMessage);
        socket.on('users', getUsers);
        socket.on('user:add', addUser);
        socket.on('user:leave', removeUser);
        socket.on(`muted`, ()=>{
            setDisabled(true);
        });
        socket.on(`active`, ()=>{
            setDisabled(false)
        });
        socket.on('disconnect', (reason) => {
                // history.push('/sign-in');
            //dispatch(actionSocketDisconnect());
        })

        dispatch(actionAuthLogin(token));
        setSocket(socket);
    }, []);

    return (
        <SocketContext.Provider value={[socket, setSocket]}>
            <div className={classes.root}>
                <CssBaseline/>
                    <UserToolBar handleDrawerToggle={handleDrawerToggle}
                                 isDisabled={isDisabled}
                                 onSendMSG={clickHandle}/>
                <NavigationPanel mobileOpen={mobileOpen}
                                 users={users}
                                 userData={userData}
                                 onLogout={logoutHandle}
                                 onChangeState={changeStateHandle}
                                 handleDrawerToggle={handleDrawerToggle}/>
                <MessageWindow authorId={userData.id} value={messages}/>
            </div>
        </SocketContext.Provider>
    );
}

