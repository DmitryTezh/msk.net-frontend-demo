/**
 * Created by DIMOS on 18.03.2017.
 */
import { AUTH_ACTIONS } from '../constants';
import { toRequestAction, toSuccessAction, toErrorAction } from '../constants';

const initialState = {
    user: undefined,
    isAuthenticated: false,
    isWaiting: false,
    error: undefined
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case toRequestAction(AUTH_ACTIONS.SIGN_IN): {
            return {
                ...state,
                isWaiting: true
            }
        }
        case toSuccessAction(AUTH_ACTIONS.SIGN_IN): {
            return {
                ...state,
                user: action.data.user,
                isAuthenticated: true,
                isWaiting: false,
                error: undefined
            }
        }
        case toErrorAction(AUTH_ACTIONS.SIGN_IN): {
            return {
                ...state,
                isWaiting: false,
                error: action.error
            }
        }
        default: {
            return state;
        }
    }
};

export default authReducer;