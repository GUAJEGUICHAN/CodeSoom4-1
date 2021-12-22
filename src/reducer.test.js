import reducer from './reducer';
import { addTask, deleteTask, updateTaskTitle } from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('changes state with new TaskTitle', () => {
      const state = reducer([], updateTaskTitle('할 일'));

      expect(state.taskTitle).toBe('할 일');
    });
  });

  describe('addTask', () => {
    context('with taskTitle', () => {
      it('appends a new task into tasks', () => {
        const previouseTask = {
          newId: 100,
          taskTitle: 'new Task',
          tasks: [],
        };
        const state = reducer(previouseTask, addTask());

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe('new Task');
      });
      it('clear taskTitle', () => {
        const previouseTask = {
          newId: 100,
          taskTitle: 'new Task',
          tasks: [],
        };
        const state = reducer(previouseTask, addTask());

        expect(state.taskTitle).toBe('');
      });
    });
    context('without taskTitle', () => {
      it('doenst work', () => {
        const previouseTask = {
          newId: 100,
          taskTitle: '',
          tasks: [],
        };
        const state = reducer(previouseTask, addTask());

        expect(state.tasks.length).toBe(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('right key', () => {
      it('remove a task', () => {
        const previouseTask = {
          newId: 100,
          taskTitle: '',
          tasks: [{
            id: 100,
            title: '가자',
          }],
        };
        const id = 100;

        const state = reducer(previouseTask, deleteTask(id));
        expect(state.tasks).toHaveLength(0);
      });
    });

    context('worng key', () => {
      it('doesnt work', () => {
        const previouseTask = {
          newId: 100,
          taskTitle: '',
          tasks: [{
            id: 100,
            title: '가자',
          }],
        };
        const id = 200;

        const state = reducer(previouseTask, deleteTask(id));
        expect(state.tasks).toHaveLength(1);
      });
    });
  });
});
