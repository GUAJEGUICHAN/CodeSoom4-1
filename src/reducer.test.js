import reducer from './reducer';
import { addTask, deleteTask, updateTaskTitle } from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    function reduceUpdateTaskTitle(taskTitle) {
      const previouseState = {
        newId: 100,
        taskTitle: '',
        tasks: [],
      };

      return reducer(previouseState, updateTaskTitle(taskTitle));
    }
    it('changes state with new TaskTitle', () => {
      const state = reduceUpdateTaskTitle('new Task');

      expect(state.taskTitle).toBe('new Task');
    });
  });

  describe('addTask', () => {
    function reduceAddTask(taskTitle) {
      const previouseState = {
        newId: 100,
        taskTitle,
        tasks: [],
      };

      return reducer(previouseState, addTask());
    }

    context('with taskTitle', () => {
      it('appends a new task into tasks', () => {
        const state = reduceAddTask('new Task');

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe('new Task');
      });

      it('clear taskTitle', () => {
        const state = reduceAddTask('task');

        expect(state.taskTitle).toBe('');
      });
    });
    context('without taskTitle', () => {
      it('doenst work', () => {
        const state = reduceAddTask('');

        expect(state.tasks.length).toBe(0);
      });
    });
  });

  describe('deleteTask', () => {
    function reduceDeleteTask(id) {
      const previouseState = {
        newId: 100,
        taskTitle: '',
        tasks: [{
          id: 100,
          title: '가자',
        }],
      };

      return reducer(previouseState, deleteTask(id));
    }

    context('with right key', () => {
      it('remove the task from tasks', () => {
        const id = 100;

        const state = reduceDeleteTask(id);
        expect(state.tasks).toHaveLength(0);
      });
    });

    context('with worng key', () => {
      it('doesnt work', () => {
        const wrongId = 200;

        const state = reduceDeleteTask(wrongId);
        expect(state.tasks).toHaveLength(1);
      });
    });
  });
});
