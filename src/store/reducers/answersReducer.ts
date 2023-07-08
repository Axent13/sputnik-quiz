const ADD_ANSWER = 'ADD_ANSWER';
const FINISH_QUIZ = 'FINISH_QUIZ';
const GET_CORRECT_ANSWERS = 'GET_CORRECT_ANSWERS';

interface IAnswersState {
  userAnswers: number[];
  correctAnswers: number[];
  isFinished: boolean;
  passed: number;
  failed: number;
}

interface IAnswersAction {
  type: string;
  payload?: any;
}

const initialState: IAnswersState = {
  userAnswers: [],
  correctAnswers: [],
  isFinished: false,
  passed: 0,
  failed: 0,
};

export const answersReducer = (
  state = initialState,
  action: IAnswersAction
): IAnswersState => {
  switch (action.type) {
    case ADD_ANSWER:
      state.userAnswers[action.payload.questionNumber] =
        action.payload.userAnswer;
      return state;
    case GET_CORRECT_ANSWERS:
      return { ...state, correctAnswers: action.payload.correctAnswers };
    case FINISH_QUIZ:
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
    default:
      return state;
  }
};
