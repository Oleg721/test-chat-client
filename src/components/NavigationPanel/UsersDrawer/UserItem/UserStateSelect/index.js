import Select from '@material-ui/core/Select';
import {FormControl, MenuItem} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useContext, useState} from "react";
import {useSelector} from "react-redux";
import TestContext from "../../../../Context";

const useStyles = makeStyles((theme) => ({
    userSelect: {
    width: "6rem",
        borderRadius: 4,
        position: 'relative',
        border: '1px solid #ced4da',
        paddingLeft: '0.7rem'
    },
    '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
    '& .MuiInputBase-root': {
        marginLeft: 1,
    },
}));

export default ({id, state})=>{

    const classes = useStyles();
    const [userState, setUserState] = useState("ACTIVE");
    const socket = useSelector(state => state.socket );

    const [testCont, setTestCon] = useContext(TestContext);
    console.log('######################3')
    console.log(testCont)

    // useSelector()

    return(

        <Select className={classes.userSelect}
                onChange={(event)=>{
                    console.log( id + " => " + event.target.value);
                    // TODO: remove
                    // socket.emit('user:setState', id, event.target.value)
                }
                }
                defaultValue={state}>
            <MenuItem value="ACTIVE">Active</MenuItem>
            <MenuItem value="MUTED">Muted</MenuItem>
            <MenuItem value="BANNED">Banned</MenuItem>
        </Select>

    )
}