export const useDispatch = jest.fn();

export const useSelector = jest.fn(
  (selector) =>
    selector({
      tasks: [
        { id: 1, title: '아무것도 안하기' },
        { id: 2, title: '책 읽기' },
      ],
    })
);
