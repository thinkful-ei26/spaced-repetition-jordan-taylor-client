import{ FETCH_QUESTION_SUCCESS } from '../actions/questions';

const initialState = 
{
    next:''
}

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_QUESTION_SUCCESS) {
        return Object.assign({}, state, {
            next: action.newQuestion
        });
    }
    return state;
}