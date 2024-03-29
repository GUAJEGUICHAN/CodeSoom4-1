import { fireEvent, render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  const handleClick = jest.fn();

  const emptyTasks = [];
  const tasks = [
    { id: 100, title: '숨 쉬기' },
  ];

  const renderInput = (task) => render((
    <List
      tasks={task}
      onClickDelete={handleClick}
    />
  ));

  context('task가 없을 때', () => {
    it('\'할 일이 없어요!\' 출력', () => {
      const { container } = renderInput(emptyTasks);

      expect(container).toHaveTextContent('할 일이 없어요!');
    });
  });

  context('task가 두개 일때', () => {
    it('Item컴포넌트가 가진 title과 완료버튼을 그린다.', () => {
      const { container, getAllByText } = renderInput(tasks);

      expect(container).toHaveTextContent(tasks[0].title);
      expect(getAllByText('완료')[0]).toContainHTML('button');
    });

    it('버튼이 작동한다.', () => {
      const { getAllByText } = renderInput(tasks);

      expect(handleClick).not.toBeCalled();
      fireEvent.click(getAllByText('완료')[0]);
      expect(handleClick).toBeCalledTimes(1);
    });
  });
});
