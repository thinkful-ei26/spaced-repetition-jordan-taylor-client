import {API_BASE_URL} from '../config';

export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS';
export const fetchQuestionSuccess = newQuestion => ({
    type: FETCH_QUESTION_SUCCESS,
    newQuestion
});

export const fetchQuestion = id => dispatch => {
  fetch(`${API_BASE_URL}auth/users/${id}/current`)
    .then(res => {

      if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
    })
    .then(question => {

      dispatch(fetchQuestionSuccess(question))
    })
};


