import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import InputBase from "@material-ui/core/InputBase";
import SendIcon from "@material-ui/icons/Send";
import React, {useState} from "react";
import {alpha, makeStyles} from "@material-ui/core/styles";
import {AppBar} from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    sendButton: {
        color: "inherit",
        '&:hover ': {
            backgroundColor: alpha(theme.palette.common.white, 0.2),
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        top: 'auto',
        bottom: 0,
    },
    textField: {
        color: 'black',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.8),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.9),

        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        '& .MuiInputBase-root': {
            width: '100%',
            fontSize: "1.3rem"
        }
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 1),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '100%',
        },
    },
}));

export default ({handleDrawerToggle, userId, isDisabled, onSendMSG, maxLength = 200}) => {

    const classes = useStyles();
    const [text, setText] = useState('');

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <PeopleAltIcon fontSize='large'/>
                </IconButton>

                <div className={classes.textField}>
                    <InputBase
                        placeholder="message???"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        value={text}
                        onChange={event => {
                            setText(event.target.value > 10 ?
                                event.target.value :
                                event.target.value.slice(0, maxLength));
                        }}
                    />
                </div>

                <IconButton disabled={isDisabled}
                            className={classes.sendButton}
                            onClick={() => {
                                onSendMSG(text);
                                setText('');
                            }}>
                    <SendIcon fontSize={"large"}/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

