import { Checkbox } from 'antd';
import React, { useState } from 'react';

interface IOptions {
  options: string[];
}

const CheckboxGroup = ({ options }: IOptions) => {
  const [activeCheckbox, setActiveCheckbox] = useState(null);

  return (
    <div>
      {options.map((option, index) => (
        <div key={option}>
          <Checkbox
            checked={index === activeCheckbox}
            onClick={() => setActiveCheckbox(index)}
          >
            {option}
          </Checkbox>
        </div>
      ))}
    </div>
  );
};

export default CheckboxGroup;
