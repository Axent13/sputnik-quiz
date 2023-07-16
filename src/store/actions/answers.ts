import { AnswersActionTypes } from 'types/answers';

export const addAnswer = (data: {
  questionNumber: number;
  userAnswer: number;
}) => {
  return {
    type: AnswersActionTypes.ADD_ANSWER,
    payload: {
      questionNumber: data.questionNumber,
      userAnswer: data.userAnswer,
    },
  };
};

export const getCorrectAnswers = (data: { correctAnswers: number[] }) => {
  return {
    type: AnswersActionTypes.GET_CORRECT_ANSWERS,
    payload: {
      correctAnswers: data.correctAnswers,
    },
  };
};

export const startQuiz = () => {
  return {
    type: AnswersActionTypes.START_QUIZ,
  };
};

export const finishQuiz = () => {
  return {
    type: AnswersActionTypes.FINISH_QUIZ,
  };
};

export const restart = () => {
  return {
    type: AnswersActionTypes.RESTART,
  };
};
