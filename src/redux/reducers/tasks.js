import {
  GET_TASKS,
  SET_TASKS,
  ADD_TASK,
  SORTED_TASKS,
  CHANGE_STATUS_DEVELOPMENT,
  DELETE_TASK,
  EDIT_FILE,
  SET_EDIT_TASK,
  COMPLETE_TASK
} from "../contants";

const task = (state = [], { type, payload }) => {
  switch (type) {
    case GET_TASKS:
      return state;
    case SET_TASKS:
      return [...payload];
    case ADD_TASK:
      return [...state, payload];
    case DELETE_TASK:
      const { id } = payload;
      const filterTasks = state.filter((task) => task.id !== id);
      return filterTasks;
    case SORTED_TASKS:
      return [...payload];
    case CHANGE_STATUS_DEVELOPMENT:
      const { updateTasks } = payload;
      return [...updateTasks];
    case EDIT_FILE:
      return state;
    case SET_EDIT_TASK:
        return [...payload];
    case COMPLETE_TASK:
      const { updatedTasks } = payload;
      return [...updatedTasks];
    default:
      return state;
  }
};

export default task;
