const ADD_ANSWER = 'ADD_ANSWER';

interface IAnswersState {
  userAnswers: number[];
  correctAnswers: number[];
  isFinished: boolean;
}

interface IAnswersAction {
  type: string;
  payload?: { questionNumber: number; userAnswer: number };
}

const initialState: IAnswersState = {
  userAnswers: [],
  correctAnswers: [],
  isFinished: false,
};

export const answersReducer = (
  state = initialState,
  action: IAnswersAction
): IAnswersState => {
  switch (action.type) {
    case ADD_ANSWER:
      console.log('adding answer', action);
      state.userAnswers[action.payload.questionNumber] =
        action.payload.userAnswer;
      return state;
    default:
      return state;
  }
};
