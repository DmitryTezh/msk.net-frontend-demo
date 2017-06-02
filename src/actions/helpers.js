/**
 * Created by DIMOS on 28.03.2017.
 */
/*
    Action creator pattern
 */
export function makeActionCreator(type, ...argNames) {
    return function(...args) {
        let action = {type};
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index]
        });
        return action;
    }
}

/*
    Fetch action types
 */
export const toRequestAction = type => type + '_REQUEST';
export const toSuccessAction = type => type + '_SUCCESS';
export const toErrorAction   = type => type + '_ERROR';