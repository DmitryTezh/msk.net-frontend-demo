/**
 * Created by DIMOS on 18.03.2017.
 */
import axios from 'axios';
import includes from 'lodash/includes';
import forEach from 'lodash/forEach';
import config from '../config';
import { REST_API_VERBS, REST_CONTENT_TYPES, REST_RESPONSE_TYPES } from '../constants';
import { toRequestAction, toSuccessAction, toErrorAction } from '../actions/helpers';

axios.defaults.baseURL = config.remoteHost;
axios.defaults.headers.post['Content-Type'] = REST_CONTENT_TYPES.FORM;
axios.defaults.headers.put['Content-Type'] = REST_CONTENT_TYPES.FORM;
//axios.defaults.headers.post['Content-Type'] = REST_CONTENT_TYPES.FORM;
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

function fetchApi({ getState, dispatch }) {
    return next => action => {
        const {
            fetchType, fetchUrl,
            fetchMethod = REST_API_VERBS.GET,
            fetchFormat = REST_CONTENT_TYPES.FORM,
            fetchResponse = REST_RESPONSE_TYPES.JSON,
            shouldFetch = () => true, payload = { }
        } = action;

        if (!fetchType) {
            return next(action);
        }

        if (typeof fetchType !== 'string') {
            throw new Error('Invalid fetch middleware usage: "fetchType" expected to be a string.');
        }
        if (typeof fetchUrl !== 'string') {
            throw new Error('Invalid fetch middleware usage: "fetchUrl" expected to be a string.');
        }
        if (!includes(REST_API_VERBS, fetchMethod)) {
            throw new Error('Invalid fetch middleware usage: unexpected "fetchMethod" value.');
        }
        if (!includes(REST_CONTENT_TYPES, fetchFormat)) {
            throw new Error('Invalid fetch middleware usage: unexpected "fetchFormat" value.');
        }
        if (!includes(REST_RESPONSE_TYPES, fetchResponse)) {
            throw new Error('Invalid fetch middleware usage: unexpected "fetchResponse" value.');
        }
        if (typeof shouldFetch !== 'function') {
            throw new Error('Invalid fetch middleware usage: "shouldFetch" expected to be a function.');
        }

        if (!shouldFetch(getState())) {
            return Promise.resolve({ data: true, status: 0, ...payload });
        }
        dispatch({ type: toRequestAction(fetchType), ...payload });

        if (fetchMethod === REST_API_VERBS.GET) {
            return axios
                .get(fetchUrl, { responseType: fetchResponse })
                .then(response => {
                    const result = { type: toSuccessAction(fetchType), data: response.data, status: response.status, ...payload };
                    dispatch(result);
                    return result;
                })
                .catch(error => {
                    const result = { type: toErrorAction(fetchType), error, ...payload };
                    dispatch(result);
                    return result;
                })
        }
        else if (fetchMethod === REST_API_VERBS.DELETE) {
            return axios
                .delete(fetchUrl)
                .then(response => {
                    const result = { type: toSuccessAction(fetchType), status: response.status, ...payload };
                    dispatch(result);
                    return result;
                })
                .catch(error => {
                    const result = { type: toErrorAction(fetchType), error, ...payload };
                    dispatch(result);
                    return result;
                })
        }
        else {
            let fetchData;
            if (fetchFormat === REST_CONTENT_TYPES.FORM) {
                fetchData = new FormData();
                forEach(payload, (value, key) => fetchData.append(key, value));
            }
            else {
                fetchData = JSON.stringify(payload);
            }

            return axios
                .request({
                    url: fetchUrl,
                    method: fetchMethod,
                    responseType: fetchResponse,
                    data: fetchData
                })
                .then(response => {
                    const result = { type: toSuccessAction(fetchType), data: response.data, status: response.status, ...payload };
                    dispatch(result);
                    return result;
                })
                .catch(error => {
                    const result = { type: toErrorAction(fetchType), error, ...payload };
                    dispatch(result);
                    return result;
                })
        }
    }
}

export default fetchApi;