import { Button, Card, Typography } from 'antd';
import React from 'react';
import styles from './WelcomeCard.module.scss';
import cn from 'classnames';

interface IWelcomeCard {
  onClick(): void;
}

const WelcomeCard = ({ onClick }: IWelcomeCard) => {
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

export default WelcomeCard;
