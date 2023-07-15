import { Card } from 'antd';
import React, { useEffect, useState } from 'react';

interface ITimerBlock {
  milliseconds: number;
  timerStopped: boolean;
}

const TimerBlock = ({ milliseconds, timerStopped }: ITimerBlock) => {
  const [ms, setMs] = useState(milliseconds);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    setTimerId(
      setInterval(() => {
        setMs((prevState) => {
          return prevState - 1;
        });
      }, 1000)
    );
  }, []);

  useEffect(() => {
    if (ms <= 0 || timerStopped) {
      clearInterval(timerId);
    }
  }, [ms]);

  return <Card>{ms}</Card>;
};

export default TimerBlock;
