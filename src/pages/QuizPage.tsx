import React from 'react';
import { Layout, Typography } from 'antd';
import Question from 'components/Question/Question';

const QuizPage = () => {
  return (
    <Layout>
      <Layout.Content>
        <Typography.Title>Тест на знание Git</Typography.Title>
        <Question text={'test1'} answers={['1', '2', '3']} />
        <Question text={'test2'} answers={['1', '2', '3']} />
      </Layout.Content>
    </Layout>
  );
};

export default QuizPage;
