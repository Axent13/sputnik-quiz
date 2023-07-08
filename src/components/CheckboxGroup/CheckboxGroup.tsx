import { Checkbox, Form } from 'antd';
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
      addAnswer({ questionNumber: questionNumber, userAnswer: index + 1 })
    );
  };

  return (
    <div>
      {options.map((option, index) => (
        <Form.Item
          key={option}
          label={`Вопрос №${questionNumber}`}
          name={`question${questionNumber}`}
        >
          <Checkbox
            checked={index === activeCheckbox}
            onClick={() => {
              handleCheckboxClick(index, questionNumber);
            }}
          >
            {option}
          </Checkbox>
        </Form.Item>
      ))}
    </div>
  );
};

export default CheckboxGroup;