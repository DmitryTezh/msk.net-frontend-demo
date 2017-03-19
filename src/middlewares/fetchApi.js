/**
 * Created by DIMOS on 18.03.2017.
 */
import axios from 'axios';
import forEach from 'lodash/forEach';
import settings from '../config/settings';
import { toRequestAction, toSuccessAction, toErrorAction } from '../constants';

const axiosApi = axios.create({
    baseUrl: settings.baseUrl
});

function fetchApi({ getState, dispatch }) {
    return next => action => {
        const {fetchType, fetchUrl, fetchMethod = 'get', shouldFetch = () => true, payload = {}} = action;
        if (!fetchType) {
            return next(action);
        }

        if (typeof fetchType !== 'string') {
            throw new Error('Invalid fetchMiddleware usage: "fetchType" expected to be a string.');
        }
        if (typeof fetchUrl !== 'string') {
            throw new Error('Invalid fetchMiddleware usage: "fetchUrl" expected to be a string.');
        }
        if (typeof shouldFetch !== 'function') {
            throw new Error('Invalid fetchMiddleware usage: "shouldFetch" expected to be a function.');
        }
        if (!shouldFetch(getState())) {
            return;
        }

        dispatch({type: toRequestAction(fetchType), ...payload});

        if (fetchMethod === 'get') {
            return axiosApi
                .get(fetchUrl)
                .then(response => dispatch({type: toSuccessAction(fetchType), data: response.data, ...payload}))
                .catch(error => dispatch({type: toErrorAction(fetchType), error, ...payload}))
        }
        else if (fetchMethod === 'delete') {
            return axiosApi
                .delete(fetchUrl)
                .then(response => dispatch({type: toSuccessAction(fetchType), ...payload}))
                .catch(error => dispatch({type: toErrorAction(fetchType), error, ...payload}))
        }
        else {
            const formData = new FormData();
            forEach(payload, (value, key) => formData.append(key, value));
            return axiosApi
                .request({
                    url: fetchUrl,
                    method: fetchMethod,
                    data: formData //JSON.stringify(payload)
                })
                .then(response => dispatch({type: toSuccessAction(fetchType), data: response.data, ...payload}))
                .catch(error => dispatch({type: toErrorAction(fetchType), error, ...payload}))
        }
    }
}

export default fetchApi;