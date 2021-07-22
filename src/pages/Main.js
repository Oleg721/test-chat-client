import React, {useContext, useEffect, useState} from 'react';
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

function Main() {

    const [socket, setSocket] = useState(null);
    const token = useSelector(state => state.auth.authToken || localStorage.getItem(`authToken`));
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const userId = useSelector(state => state.auth.payload?.id);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isDisabled, setDisabled] = useState(useSelector(state => state.auth.payload?.state === 'MUTED'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    function clickHandle(text) {
        socket.emit('message:add', text, userId);
        setDisabled(true);
        setTimeout(()=> setDisabled(false), 20000)
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
            setDisabled(true)
        })
        socket.on(`active`, ()=>{
            setDisabled(false)
        })
        socket.on('disconnect', () => {
            history.push('/sign-in');
            dispatch(actionSocketDisconnect());
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
                <NavigationPanel mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>
                <MessageWindow/>
            </div>
        </SocketContext.Provider>
    );
}
export default Main;
