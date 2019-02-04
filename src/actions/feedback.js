
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import { saveServerResponse } from '../local-storage';

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

const storeServerResponse = (response, dispatch) => {

    dispatch(serverSuccess(response));
    // saveServerResponse(response);
};

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
            .then(res =>{ 
                return res.json()
            })
            .then((serverFeedback) =>{ 
                console.log(serverFeedback);
                storeServerResponse(serverFeedback,dispatch);
            })
            .catch(err => {
                dispatch(serverError(err));
            })
        );
}
