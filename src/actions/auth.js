/**
 * Created by DIMOS on 19.03.2017.
 */
import { AUTH_ACTIONS } from '../constants';

export const userSignIn = (email, password) => ({
    fetchType: AUTH_ACTIONS.SIGN_IN,
    fetchUrl: '/auth/signin',
    fetchMethod: 'post',
    payload: { email, password }
});

export const userSignUp = (email, password, nickname) => ({
    fetchType: AUTH_ACTIONS.SIGN_UP,
    fetchUrl: '/auth/signup',
    fetchMethod: 'post',
    payload: { email, password, nickname }
});

export const userSignOut = () => ({
    fetchType: AUTH_ACTIONS.SIGN_OUT,
    fetchUrl: '/auth/signout',
    fetchMethod: 'post'
});