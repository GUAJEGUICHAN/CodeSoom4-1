import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  const tasks = [
    { id: 100, title: '숨 쉬기' },
  ];
  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));
  const { getByText } = render(<App />);

  expect(getByText(/추가/)).not.toBeNull();
  expect(getByText(/숨 쉬기/)).not.toBeNull();
});

// describe('App', () => {
//   it('App이 그려진다.', () => {
//     const tasks = [
//       { id: 100, title: '숨 쉬기' },
//     ];
//     useSelector.mockImplementation((selector) => selector({
//       tasks,
//     }))
//     const { container } = render(<App />);
//     expect(container);
//   });

//   it('할 일을 입력할 수 있다.', () => {

//     const tasks = [
//       { id: 100, title: 'test' },
//     ];
//     useSelector.mockImplementation((selector) => selector({
//       tasks,
//     }))

//     const { container, getByRole, getByLabelText } = render((<App />));
//     const taskTitle = 'test';

//     fireEvent.change(getByLabelText('할 일'), {
//       target: {
//         value: taskTitle,
//       },
//     });

//     expect(getByLabelText('할 일').value).toBe(taskTitle);

//     fireEvent.click(getByRole('button', { name: '추가' }));

//     expect(getByText('test')).not.toBeNull;
//   });

//   it('할 일을 추가하면, 입련 란이 빈 값이 된다.', () => {
//     const { getByLabelText, getByRole } = render((<App />));
//     const taskTitle = 'test';

//     fireEvent.change(getByLabelText('할 일'), {
//       target: {
//         value: taskTitle,
//       },
//     });
//     fireEvent.click(getByRole('button', { name: '추가' }));

//     expect(getByLabelText('할 일').value).toBe('');
//   });

//   it('할 일이 비어있으면 "할 일이 없어요!"가 뜬다. ', () => {
//     const tasks = [
//       { id: 100, title: '숨 쉬기' },
//     ];

//     const {
//       container, getByRole, getAllByRole, getByLabelText,
//     } = render((<App />));

//     expect(container).toHaveTextContent('할 일이 없어요!');

//     tasks.forEach((task) => {
//       fireEvent.change(getByLabelText('할 일'), {
//         target: {
//           value: task,
//         },
//       });
//       fireEvent.click(getByRole('button', { name: '추가' }));
//     });

//     expect(container).not.toHaveTextContent('할 일이 없어요!');

//     const buttons = getAllByRole('button', { name: '완료' });

//     expect(buttons).toHaveLength(1);
//     fireEvent.click(buttons[0]);
//     expect(container).not.toHaveTextContent(tasks[0].title);

//     expect(container).toHaveTextContent('할 일이 없어요!');
//   });
// });
