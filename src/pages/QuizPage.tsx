import React, { useEffect } from 'react';
import { Button, Layout, Typography } from 'antd';
import Question from 'components/Question/Question';
import { questions } from 'questions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { finishQuiz, getCorrectAnswers } from 'store/actions/answers';
import './QuizPage.scss';

const QuizPage = () => {
  const state = useTypedSelector((state) => state.answers);
  const dispatch = useDispatch();

  useEffect(() => {
    const correctAnswers = questions.map((question) => question.correctAnswer);
    dispatch(getCorrectAnswers({ correctAnswers }));
  }, []);

  const onFinish = () => {
    dispatch(finishQuiz());
    console.log('Sending state:', state);
  };

  return (
    <Layout>
      <Layout.Content className='quizpage__content'>
        <Typography.Title className='quizpage__title'>
          Тест на знание Git
        </Typography.Title>
        {questions.map((question, index) => (
          <Question
            key={question.text}
            text={question.text}
            answers={question.answers}
            questionNumber={index + 1}
          />
        ))}
        <div className='quizpage__button'>
          <Button type='primary' htmlType='button' onClick={() => onFinish()}>
            Отправить
          </Button>
        </div>
      </Layout.Content>
    </Layout>
  );
};

export default QuizPage;
