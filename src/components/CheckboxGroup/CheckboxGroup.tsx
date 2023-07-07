import { Checkbox } from 'antd';
import React, { useState } from 'react';

type TOption = { label: string; value: string };

interface IOptions {
  options: TOption[];
}

const CheckboxGroup = ({ options }: IOptions) => {
  const [activeCheckbox, setActiveCheckbox] = useState(null);

  return (
    <div>
      {options.map((option, index) => (
        <div key={option.label}>
          <Checkbox
            checked={index === activeCheckbox}
            onClick={() => setActiveCheckbox(index)}
          >
            {option.label}
          </Checkbox>
        </div>
      ))}
    </div>
  );
};

export default CheckboxGroup;
