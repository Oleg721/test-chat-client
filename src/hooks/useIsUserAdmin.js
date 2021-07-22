import {useSelector} from "react-redux";

export default function useIsUserAdmin(){
    return useSelector(state => state.auth.payload?.role) === 'ADMIN';
}