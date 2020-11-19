import { LOGIN, SIGN_OUT, REQUEST_SIGN_OUT, CANCEL_SIGN_OUT_REQUEST } from "../actionTypes";

const initialState = {
    loggedIn: false,
    showSignoutConfirmationDialog: false
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loggedIn: true
            }
        case SIGN_OUT:
            return {
                ...state,
                loggedIn: false,
                showSignoutConfirmationDialog: false
            }
        case REQUEST_SIGN_OUT:
            return {
                ...state,
                showSignoutConfirmationDialog: true
            }
        case CANCEL_SIGN_OUT_REQUEST:
            return {
                ...state,
                showSignoutConfirmationDialog: false
            }
        default:
            return state;
    }
}

export default auth;