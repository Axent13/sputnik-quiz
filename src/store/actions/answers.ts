export const addAnswer = (data: {
  questionNumber: number;
  userAnswer: number;
}) => {
  return {
    type: 'ADD_ANSWER',
    payload: {
      questionNumber: data.questionNumber,
      userAnswer: data.userAnswer,
    },
  };
};

export const getCorrectAnswers = (data: { correctAnswers: number[] }) => {
  return {
    type: 'GET_CORRECT_ANSWERS',
    payload: {
      correctAnswers: data.correctAnswers,
    },
  };
};

export const startQuiz = () => {
  return {
    type: 'START_QUIZ',
  };
};

export const finishQuiz = () => {
  return {
    type: 'FINISH_QUIZ',
  };
};

export const restart = () => {
  return {
    type: 'RESTART',
  };
};
