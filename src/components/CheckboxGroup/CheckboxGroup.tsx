import { Checkbox } from 'antd';
import { useTypedSelector } from 'hooks/useTypedSelector';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAnswer } from 'store/actions/answers';

interface IOptions {
  options: string[];
  questionNumber: number;
}

const CheckboxGroup = ({ options, questionNumber }: IOptions) => {
  const [activeCheckbox, setActiveCheckbox] = useState(null);
  const dispatch = useDispatch();

  const { userAnswers, isFinished } = useTypedSelector(
    (state) => state.answers
  );

  const handleCheckboxClick = (index: number, questionNumber: number) => {
    setActiveCheckbox(index);
    dispatch(
      addAnswer({ questionNumber: questionNumber - 1, userAnswer: index + 1 })
    );
  };

  const isDefaultChecked = (index: number) => {
    return userAnswers[questionNumber - 1] === index + 1;
  };

  return (
    <>
      {options.map((option, index) => (
        <Checkbox
          key={option}
          checked={isDefaultChecked(index) || index === activeCheckbox}
          onClick={() => {
            handleCheckboxClick(index, questionNumber);
          }}
          disabled={isFinished}
        >
          {option}
        </Checkbox>
      ))}
    </>
  );
};

export default CheckboxGroup;
