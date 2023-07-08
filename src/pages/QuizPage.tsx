import React, { useEffect } from 'react';
import { Button, Form, Layout, Typography } from 'antd';
import Question from 'components/Question/Question';
import { questions } from 'questions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { finishQuiz, getCorrectAnswers } from 'store/actions/answers';

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
      <Layout.Content>
        <Typography.Title>Тест на знание Git</Typography.Title>
        <Form onFinish={onFinish}>
          {questions.map((question, index) => (
            <Question
              key={question.text}
              text={question.text}
              answers={question.answers}
              questionNumber={index + 1}
            />
          ))}
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Отправить
            </Button>
          </Form.Item>
        </Form>
      </Layout.Content>
    </Layout>
  );
};

export default QuizPage;
