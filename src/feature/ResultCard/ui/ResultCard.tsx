import { Card, Typography } from 'antd';

interface ResultCardProps {
  passed: number;
  failed: number;
}

export const ResultCard = ({ passed, failed }: ResultCardProps) => {
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
