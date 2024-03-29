import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const handleClick = jest.fn();
  const handleChange = jest.fn();

  const value = 'test';

  const renderInput = () => render((
    <Input
      value={value}
      onClick={handleClick}
      onChange={handleChange}
    />
  ));

  it('할 일을 그린다.', () => {
    const { getByLabelText } = renderInput();

    expect(getByLabelText('할 일')).toHaveAttribute('value', value);
  });

  it('추가 버튼이 작동한다.', () => {
    const { getByText } = renderInput();

    expect(handleClick).not.toBeCalled();
    fireEvent.click(getByText('추가'));
    expect(handleClick).toBeCalled();
  });

  it('handleChange 함수가 작동된다.', () => {
    const { getByLabelText } = renderInput();

    expect(handleChange).not.toBeCalled();
    fireEvent.change(getByLabelText('할 일'), {
      target: {
        value: 'test2',
      },
    });
    expect(handleChange).toBeCalled();
  });
});
