import { Card, Typography } from 'antd';
import { useEffect, useState } from 'react';
import styles from './TimerBlock.module.scss';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { finishQuiz } from 'shared/store/actions/answers';

interface TimerBlockProps {
  maxTime: number;
  timerStopped: boolean;
}

export const TimerBlock = ({ maxTime, timerStopped }: TimerBlockProps) => {
  const dispatch = useDispatch();
  const [time, setTime] = useState(maxTime);
  const [timerId, setTimerId] = useState(null);

  const formatToTwoDigits = (value: string) => {
    if (value.length === 1) {
      return `0${value}`;
    }
    return value;
  };

  const printTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;

    return `${formatToTwoDigits(minutes.toString())}:${formatToTwoDigits(
      seconds.toString()
    )}`;
  };

  useEffect(() => {
    setTimerId(
      setInterval(() => {
        setTime((prevState) => {
          return prevState - 1;
        });
      }, 1000)
    );
  }, []);

  useEffect(() => {
    if (time <= 0 || timerStopped) {
      clearInterval(timerId);
      dispatch(finishQuiz());
    }
  }, [time]);

  return (
    <Card className={cn(styles['timer-block'])}>
      Осталось:
      <Typography.Paragraph className={cn(styles['timer-block__time'])}>
        {printTime()}
      </Typography.Paragraph>
    </Card>
  );
};
