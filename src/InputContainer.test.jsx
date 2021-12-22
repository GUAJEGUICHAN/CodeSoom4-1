import { useDispatch, useSelector } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';
import InputContainer from './InputContainer';

jest.mock('react-redux');

test('InputContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    taskTitle: 'New Title',
  }));
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  const { getByText, getByDisplayValue } = render(<InputContainer />);

  expect(getByText(/추가/)).not.toBeNull();
  expect(getByDisplayValue(/New Title/)).not.toBeNull();

  fireEvent.click(getByText(/추가/));
  expect(dispatch).toBeCalledWith({
    type: 'addTask',
  });
});
