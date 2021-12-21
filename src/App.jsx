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

  function handleChangeTitle(event) {
    dispatch({
      type: 'updateTaskTitle',
      payload: {
        taskTitle: event.target.value,
      },
    });
  }

  function handleClickAddTask() {
    dispatch({
      type: 'addTask',
    });
  }

  function handleClickDeleteTask(id) {
    dispatch({
      type: 'deleteTask',
      payload: {
        id,
      },
    });
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
