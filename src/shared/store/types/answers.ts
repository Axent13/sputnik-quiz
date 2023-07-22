export interface AnswersState {
  userAnswers: number[];
  correctAnswers: number[];
  isStarted: boolean;
  isFinished: boolean;
  passed: number;
  failed: number;
}

export enum AnswersActionTypes {
  ADD_ANSWER = 'ADD_ANSWER',
  START_QUIZ = 'START_QUIZ',
  FINISH_QUIZ = 'FINISH_QUIZ',
  GET_CORRECT_ANSWERS = 'GET_CORRECT_ANSWERS',
  RESTART = 'RESTART',
}

interface AddAnswerAction {
  type: AnswersActionTypes.ADD_ANSWER;
  payload: { questionNumber: number; userAnswer: number };
}

interface StartQuizAction {
  type: AnswersActionTypes.START_QUIZ;
}

interface FinishQuizAction {
  type: AnswersActionTypes.FINISH_QUIZ;
}

interface GetCorrectAnswersAction {
  type: AnswersActionTypes.GET_CORRECT_ANSWERS;
  payload: { correctAnswers: number[] };
}

interface RestartAction {
  type: AnswersActionTypes.RESTART;
}

export type AnswersAction =
  | AddAnswerAction
  | StartQuizAction
  | FinishQuizAction
  | GetCorrectAnswersAction
  | RestartAction;
