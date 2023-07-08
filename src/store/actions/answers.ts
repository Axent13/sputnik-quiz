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

export const finishQuiz = () => {
  return {
    type: 'FINISH_QUIZ',
  };
};
