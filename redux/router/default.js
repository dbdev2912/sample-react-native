export default (state, action) => {
    switch (action.type) {

        case "setAuthInfor":
            return setAuthInfor(state, action);
            break;

        case "signin": 
            return signIn(state, action);
            break;
        default:
            return state;
    }
}

const signIn = (state, action) => {

    const { signed, data, token } = action.payload

    return {...state, auth: { signed, auth: data, token }}
}


const setAuthInfor = (state, action) => {
    const { user } = action.payload;
    return { ...state, auth: user }
} 