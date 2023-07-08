import { Card, Typography } from 'antd';
import React from 'react';

interface IResultCard {
  passed: number;
  failed: number;
}

const ResultCard = ({ passed, failed }: IResultCard) => {
  return (
    <Card title='Ваш результат:'>
      <Typography.Paragraph>
        Правильных ответов: <strong>{passed}</strong>
      </Typography.Paragraph>
      <Typography.Paragraph>
        Неправильных ответов: <strong>{failed}</strong>
      </Typography.Paragraph>
    </Card>
  );
};

export default ResultCard;
