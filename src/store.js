import { createStore } from 'redux';

const initialState = {
  newId: 100,
  taskState: '',
  tasks: [],
};

function reducer(state = initialState, action) {
  if (action.type === 'updateTaskTitle') {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  }
  return state;
}
const store = createStore(reducer);

export default store;
