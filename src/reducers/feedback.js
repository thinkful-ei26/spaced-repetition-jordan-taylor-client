import { SERVER_RESPONSE_REQUEST, 
SERVER_RESPONSE_SUCCESS, 
SERVER_RESPONSE_ERROR } from '../actions/feedback';

const initialState = {
    response: {},
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === SERVER_RESPONSE_REQUEST) {
        return Object.assign({}, state, {
            error:null
        });
    } else if (action.type === SERVER_RESPONSE_SUCCESS) {
        return Object.assign({}, state, {
            response: action.serverResponse
        });
    } else if (action.type === SERVER_RESPONSE_ERROR) {
        return Object.assign({}, state, {
            error: null
        });
    }
    return state;
}