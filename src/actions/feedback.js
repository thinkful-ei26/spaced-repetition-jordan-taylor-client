
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const SERVER_RESPONSE_REQUEST = 'SERVER_RESPONSE_REQUEST';
export const serverRequest = () => ({
    type: SERVER_RESPONSE_REQUEST
});

export const SERVER_RESPONSE_SUCCESS = 'SERVER_RESPONSE_SUCCESS';
export const serverSuccess = serverResponse => ({
    type: SERVER_RESPONSE_SUCCESS,
    serverResponse
});

export const SERVER_RESPONSE_ERROR = 'SERVER_RESPONSE_ERROR';
export const serverError = error => ({
    type: SERVER_RESPONSE_ERROR,
    error
});

export const feedback = (answer) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(serverRequest());
    console.log(answer); 
    return (
        fetch(`${API_BASE_URL}/api/questions/current`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`
            },
            body: JSON.stringify({
                answer
            })
        })
            // Reject any requests which don't return a 200 status, creating
            // errors which follow a consistent format
            // .then(res => normalizeResponseErrors(res))
            .then(res =>{ 
                return res.json()
            })
            .then((serverFeedback) =>{ 
                console.log(serverFeedback);
                serverSuccess(serverFeedback);
            })
            .catch(err => {
                dispatch(serverError(err));
            })
        );
}
