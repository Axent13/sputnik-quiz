import { Checkbox } from 'antd';
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

  const handleCheckboxClick = (index: number, questionNumber: number) => {
    setActiveCheckbox(index);
    dispatch(
      addAnswer({ questionNumber: questionNumber - 1, userAnswer: index + 1 })
    );
  };

  return (
    <>
      {options.map((option, index) => (
        <Checkbox
          key={option}
          checked={index === activeCheckbox}
          onClick={() => {
            handleCheckboxClick(index, questionNumber);
          }}
        >
          {option}
        </Checkbox>
      ))}
    </>
  );
};

export default CheckboxGroup;
