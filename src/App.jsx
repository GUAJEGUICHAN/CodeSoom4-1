import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Page from './Page';

function updateTaskTitle(state, taskTitle) {
  return {
    ...state,
    taskTitle,
  };
}

function addTask(state) {
  const { newId, tasks, taskTitle } = state;
  return {
    ...state,
    newId: newId + 1,
    taskTitle: '',
    tasks: [...tasks, { id: newId, title: taskTitle }],
  };
}
function deleteTask(state, id) {
  const { tasks } = state;
  return {
    ...state,
    tasks: tasks.filter((task) => task.id !== id),
  };
}

export default function App() {
  const dispatch = useDispatch();
  const { taskTitle, tasks } = useSelector((state) => ({
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  }));
  //  const [state, setState] = useState(initialState);

  function handleChangeTitle(event) {
    dispatch(updateTaskTitle(state, event.target.value));
    // 여기서 updateTaskTitle은 액션크리에이터다.
  }

  function handleClickAddTask() {
    dispatch(addTask(state));
    // 여기서 addTask은 액션크리에이터다.
  }

  function handleClickDeleteTask(id) {
    dispatch(deleteTask(state, id));
    // 여기서 deleteTask은 액션크리에이터다.
  }

  return (
    <Page
      taskTitle={taskTitle}
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
      tasks={tasks}
      onClickDeleteTask={handleClickDeleteTask}
    />
  );
}
