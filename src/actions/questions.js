import {API_BASE_URL} from '../config';

export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS';
export const fetchQuestionSuccess = newQuestion => ({
    type: FETCH_QUESTION_SUCCESS,
    newQuestion
});

export const fetchQuestion = id => dispatch => {
  fetch(`${API_BASE_URL}/api/questions`)
    .then(res => {
      console.log(res);
      if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
    })
    .then(question => {
      console.log(question);
      dispatch(fetchQuestionSuccess(question.user.head))
    })
};

