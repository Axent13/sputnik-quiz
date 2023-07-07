import React from 'react';
import { Typography } from 'antd';
import CheckboxGroup from 'components/CheckboxGroup/CheckboxGroup';

interface IQuestion {
  text: string;
  answers: string[];
}

const Question = ({ text, answers }: IQuestion) => {
  return (
    <div>
      <Typography.Paragraph>{text}</Typography.Paragraph>
      <CheckboxGroup options={answers} />
    </div>
  );
};

export default Question;
