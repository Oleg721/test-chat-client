import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/VpnKey';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useDispatch} from "react-redux";
import {actionSignIn} from "../actions";
import {userJsonSchema} from "../jsonShemas/index"
import Ajv from "ajv";


const userValidate = new Ajv().compile(userJsonSchema);


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    input: {

    }
}));

export default function SignIn() {

    const [login, setLogin] = useState(`vasia`);
    const [password, setPassword] = useState(`12345678`);
    const [isLoginCorrect, setIsLoginCorrect] = useState(true);
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    const classes = useStyles();
    const dispatch = useDispatch();


    function checkAndSendForm(){
        isLoginCorrect || setIsLoginCorrect(true);
        isPasswordCorrect || setIsPasswordCorrect(true);
        !errorMessage || setErrorMessage('');

        if(userValidate({login: login, password: password})) {

            dispatch(actionSignIn({
                login: login,
                password: password
            }))
        } else {

            const nameErrorField = userValidate.errors[0].instancePath.replace("/","")

            if(nameErrorField === "login")setIsLoginCorrect(false);
            if(nameErrorField === "password")setIsPasswordCorrect(false)

            setErrorMessage( `Field "${nameErrorField.charAt(0).toUpperCase() +
            nameErrorField.slice(1)}" ${userValidate.errors[0].message}`)
        }
    }


    //console.log(userValidate({login: login, password: password}) || userValidate.errors)

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>        //await user.addMessage(message)
                <Typography component="h1" variant="h5" >
                    Sign in / Sign Up
                </Typography>

                    <TextField
                        value={login}
                        error={!isLoginCorrect}
                        className={classes.input}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="login"
                        label="Login"
                        required
                        autoComplete="username"
                        autoFocus
                        onChange={event => setLogin(event.target.value)}
                        helperText="min 3 characters, should not contain special symbols"
                    />

                    <TextField
                        value={password}
                        error={!isPasswordCorrect}
                        className={classes.input}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={event => setPassword(event.target.value)}
                        helperText="min 8 characters"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
/*                        disabled={(login.length < 3)|| login.match(/[^a-zA-Z0-9 ]/g) || (password.length < 8)}*/
                          // disabled={!userValidate({login: login, password: password})}
                        onClick={checkAndSendForm}
                    >
                        Sign In / Sign Up
                    </Button>
                <ErrorMessage message={errorMessage}/>
            </div>

        </Container>
    );
}

const ErrorMessage = ({message})=>{
    return(
        <Box color="error.main">
            <Typography>
                {message}
            </Typography>
        </Box>
    )
}