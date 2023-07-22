import { Checkbox } from 'antd';
import { useTypedSelector } from 'shared/hooks/useTypedSelector';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAnswer } from 'shared/store/actions/answers';

interface CheckboxGroupProps {
  options: string[];
  questionNumber: number;
}

export const CheckboxGroup = ({
  options,
  questionNumber,
}: CheckboxGroupProps) => {
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
