/**
 * Created by DIMOS on 18.03.2017.
 */
/*
 Fetch action types
 */
export const toRequestAction = type => type + '_REQUEST';
export const toSuccessAction = type => type + '_SUCCESS';
export const toErrorAction   = type => type + '_ERROR';

/* Auth action types
 */
export const AUTH_ACTIONS = {
    SIGN_IN: 'SIGN_IN',
    SIGN_UP: 'SIGN_UP',
    SIGN_OUT: 'SIGN_OUT'
};