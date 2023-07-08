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
