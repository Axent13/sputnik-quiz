import { Checkbox, Form } from 'antd';
import React, { useState } from 'react';

interface IOptions {
  options: string[];
  questionNumber: number;
}

const CheckboxGroup = ({ options, questionNumber }: IOptions) => {
  const [activeCheckbox, setActiveCheckbox] = useState(null);

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
            onChange={() => setActiveCheckbox(index)}
          >
            {option}
          </Checkbox>
        </Form.Item>
      ))}
    </div>
  );
};

export default CheckboxGroup;
