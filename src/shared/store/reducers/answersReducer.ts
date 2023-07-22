import {
  AnswersAction,
  AnswersActionTypes,
  AnswersState,
} from '../types/answers';

const initialState: AnswersState = {
  userAnswers: [],
  correctAnswers: [],
  isStarted: false,
  isFinished: false,
  passed: 0,
  failed: 0,
};

export const answersReducer = (
  state = initialState,
  action: AnswersAction
): AnswersState => {
  switch (action.type) {
    case AnswersActionTypes.ADD_ANSWER:
      state.userAnswers[action.payload.questionNumber] =
        action.payload.userAnswer;
      return state;
    case AnswersActionTypes.GET_CORRECT_ANSWERS:
      return { ...state, correctAnswers: action.payload.correctAnswers };
    case AnswersActionTypes.START_QUIZ:
      state.isStarted = true;
      state.userAnswers = [];
      state.isFinished = false;

      return { ...state };
    case AnswersActionTypes.FINISH_QUIZ:
      state.passed = 0;
      state.failed = 0;
      state.correctAnswers.forEach((answer, index) => {
        if (answer === state.userAnswers[index]) {
          state.passed++;
        } else {
          state.failed++;
        }
      });

      return { ...state, isFinished: true };
    case AnswersActionTypes.RESTART:
      return { ...initialState };
    default:
      return state;
  }
};
