import { useDispatch, useSelector } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';
import ListContainer from './ListContainer';

jest.mock('react-redux');

test('ListContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    tasks: [
      {
        id: 100,
        title: 'previous Task',
      }],
  }));

  const { getByText } = render(<ListContainer />);
  expect(getByText(/previous Task/)).not.toBeNull();

  fireEvent.click(getByText('완료'));
  expect(dispatch).toBeCalledWith({
    type: 'deleteTask',
    payload: { id: 100 },
  });
});
