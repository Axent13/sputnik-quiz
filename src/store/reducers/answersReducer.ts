const ADD_ANSWER = 'ADD_ANSWER';
const START_QUIZ = 'START_QUIZ';
const FINISH_QUIZ = 'FINISH_QUIZ';
const GET_CORRECT_ANSWERS = 'GET_CORRECT_ANSWERS';
const RESTART = 'RESTART';

interface IAnswersState {
  userAnswers: number[];
  correctAnswers: number[];
  isStarted: boolean;
  startTime: Date;
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
  isStarted: false,
  startTime: null,
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
    case START_QUIZ:
      state.isStarted = true;
      state.startTime = new Date();
      state.userAnswers = [];
      state.isFinished = false;

      return { ...state };
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
    case RESTART:
      return { ...initialState };
    default:
      return state;
  }
};
