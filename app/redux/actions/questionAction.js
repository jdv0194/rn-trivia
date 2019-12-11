import {
  FETCHING_QUESTIONS_REQUEST,
  FETCHING_QUESTIONS_SUCCESS,
  FETCHING_QUESTIONS_ERROR,
  CORRECT_ANSWER,
  NEXT_QUESTION,
  CLEAR,
  USER_ANSWER
} from "./types";

export const fetchingQuestionsRequest = () => ({
  type: FETCHING_QUESTIONS_REQUEST
});

export const fetchingQuestionsSuccess = json => ({
  type: FETCHING_QUESTIONS_SUCCESS,
  payload: json
});

export const fetchingQuestionsError = error => ({
  type: FETCHING_QUESTIONS_ERROR,
  payload: error
});

export const correctAnswer = () => ({
  type: CORRECT_ANSWER
});

export const nextQuestion = () => ({
  type: NEXT_QUESTION
});

export const addUserAnswer = answer => ({
  type: USER_ANSWER,
  payload: answer
});

export const clear = () => ({
  type: CLEAR
});

export const fetchQuestion = () => {
  return async dispatch => {
    dispatch(fetchingQuestionsRequest());
    try {
      let response = await fetch(
        "https://opentdb.com/api.php?amount=5&type=multiple"
      );
      let json = await response.json();
      dispatch(fetchingQuestionsSuccess(json.results));
    } catch (err) {
      dispatch(fetchingQuestionsError(err));
    }
  };
};
