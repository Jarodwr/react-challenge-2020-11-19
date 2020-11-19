import { LOGIN, SIGN_OUT, REQUEST_SIGN_OUT, CANCEL_SIGN_OUT_REQUEST } from "./actionTypes";

export const login = () => ({
    type: LOGIN,
    payload: {}
})

export const signout = () => ({
    type: SIGN_OUT,
    payload: {}
})

export const requestSignout = () => ({
    type: REQUEST_SIGN_OUT,
    payload: {}
})

export const cancelSignoutRequest = () => ({
    type: CANCEL_SIGN_OUT_REQUEST,
    payload: {}
})