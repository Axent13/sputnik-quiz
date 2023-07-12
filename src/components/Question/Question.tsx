import React from 'react';
import { Card, Typography } from 'antd';
import CheckboxGroup from 'components/CheckboxGroup/CheckboxGroup';
import styles from './Question.module.scss';
import classNames from 'classnames';

interface IQuestion {
  text: string;
  answers: string[];
  questionNumber: number;
}

const Question = ({ text, answers, questionNumber }: IQuestion) => {
  return (
    <div className={classNames(styles.question)}>
      <Card title={`Вопрос №${questionNumber}`}>
        <Typography.Paragraph>{text}</Typography.Paragraph>
        <div className={classNames(styles.question__checkboxes)}>
          <CheckboxGroup options={answers} questionNumber={questionNumber} />
        </div>
      </Card>
    </div>
  );
};

export default Question;
