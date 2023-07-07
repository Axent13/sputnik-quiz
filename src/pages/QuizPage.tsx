import React from 'react';
import { Button, Form, Layout, Typography } from 'antd';
import Question from 'components/Question/Question';
import { questions } from 'questions';

const QuizPage = () => {
  const onFinish = (values: unknown) => {
    console.log('Sending values:', values);
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
