import React from 'react';
import { Typography } from 'antd';
import CheckboxGroup from 'components/CheckboxGroup/CheckboxGroup';

interface IQuestion {
  text: string;
  answers: string[];
  questionNumber: number;
}

const Question = ({ text, answers, questionNumber }: IQuestion) => {
  return (
    <div>
      <Typography.Paragraph>{text}</Typography.Paragraph>
      <CheckboxGroup options={answers} questionNumber={questionNumber} />
    </div>
  );
};

export default Question;
