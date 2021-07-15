export default (state = {}, action) => {

    if (action.type === 'AUTH_LOGIN'){
        return {authToken: action.jwt, payload: jwt_decode(action.jwt)}
    }

    if (action.type === 'LOGOUT'){
        console.log('LOGOUT')
        localStorage.removeItem(`authToken`);

        return {}
    }
    return state
}

function jwt_decode(token) {
    if(!token || token === `undefined` || token === `null`) {
        return ``};
    try {
        let i =  window.atob(token.match(/(?<=[.]).+(?=[.])/));
        console.log(i);
        return JSON.parse(i);
    } catch (e) {
        console.log(`jwt_decode err` + e.name)
        return null;
    }

}