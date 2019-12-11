import {
  FETCHING_QUESTIONS_REQUEST,
  FETCHING_QUESTIONS_SUCCESS,
  FETCHING_QUESTIONS_ERROR,
  NEXT_QUESTION,
  CORRECT_ANSWER,
  USER_ANSWER,
  CLEAR
} from "../actions/types";

const initialState = {
  isFetching: false,
  errorMessage: "",
  questions: [],
  questionNumber: 0,
  correctAnswers: 0,
  userAnswer: ""
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_QUESTIONS_REQUEST:
      return { ...state, isFetching: true };
    case FETCHING_QUESTIONS_ERROR:
      return { ...state, isFetching: false, errorMessage: action.payload };
    case FETCHING_QUESTIONS_SUCCESS:
      return { ...state, isFetching: false, questions: action.payload };
    case NEXT_QUESTION:
      return { ...state, questionNumber: state.questionNumber + 1 };
    case CORRECT_ANSWER:
      return { ...state, correctAnswers: state.correctAnswers + 1 };
    case CLEAR:
      return (state = initialState);
    case USER_ANSWER:
      return { ...state, userAnswer: action.payload };
    default:
      return state;
  }
};

export default questionReducer;
