import React from 'react';
import { Layout, Typography } from 'antd';
import Question from 'components/Question/Question';
import { questions } from 'questions';

const QuizPage = () => {
  return (
    <Layout>
      <Layout.Content>
        <Typography.Title>Тест на знание Git</Typography.Title>
        {questions.map((question) => (
          <Question
            key={question.text}
            text={question.text}
            answers={question.answers}
          />
        ))}
      </Layout.Content>
    </Layout>
  );
};

export default QuizPage;
