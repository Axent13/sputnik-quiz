import { Button, Card, Typography } from 'antd';
import styles from './WelcomeCard.module.scss';
import cn from 'classnames';

interface WelcomeCardProps {
  onClick(): void;
}

export const WelcomeCard = ({ onClick }: WelcomeCardProps) => {
  return (
    <Card className={cn(styles['welcome-card'])}>
      <Typography.Title className={cn(styles['welcome-card__title'])}>
        Sputnik Quiz
      </Typography.Title>
      <Typography.Paragraph className={cn(styles['welcome-card__text'])}>
        Для начала работы необходимо авторизоваться в системе
      </Typography.Paragraph>
      <Button
        type='primary'
        shape='round'
        onClick={onClick}
        className={cn(styles['welcome-card__button'])}
      >
        Войти
      </Button>
    </Card>
  );
};
