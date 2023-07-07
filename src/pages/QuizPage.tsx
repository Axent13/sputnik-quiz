import React from 'react';
import { Layout, Typography } from 'antd';
import { questions } from 'questions';
import CheckboxGroup from 'components/CheckboxGroup/CheckboxGroup';

const QuizPage = () => {
  const mockOptions = [
    { label: 'label-1', value: '1' },
    { label: 'label-2', value: '2' },
    { label: 'label-3', value: '3' },
  ];

  return (
    <Layout>
      <Layout.Content>
        <Typography.Title>Тест на знание Git</Typography.Title>
        <CheckboxGroup options={mockOptions} />
        <CheckboxGroup options={mockOptions} />
      </Layout.Content>
    </Layout>
  );
};

export default QuizPage;
