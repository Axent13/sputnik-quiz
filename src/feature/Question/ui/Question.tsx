import { Card, Typography } from 'antd';
import { CheckboxGroup } from 'entities/CheckboxGroup';
import styles from './Question.module.scss';
import cn from 'classnames';

interface QuestionProps {
  text: string;
  answers: string[];
  questionNumber: number;
}

export const Question = ({ text, answers, questionNumber }: QuestionProps) => {
  return (
    <div className={cn(styles['question'])}>
      <Card title={`Вопрос №${questionNumber}`}>
        <Typography.Paragraph>{text}</Typography.Paragraph>
        <div className={cn(styles['question__checkboxes'])}>
          <CheckboxGroup options={answers} questionNumber={questionNumber} />
        </div>
      </Card>
    </div>
  );
};
