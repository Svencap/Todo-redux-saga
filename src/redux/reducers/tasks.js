import {
  GET_TASKS,
  SET_TASKS,
  ADD_TASK,
  SORTED_TASKS,
  CHANGE_STATUS_DEVELOPMENT,
  DELETE_TASK,
  DELETE_SUBTASK,
  DELETE_FILE,
  EDIT_FILE,
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
    // case DELETE_SUBTASK:
    //   const { generalTaskId, subTasks } = payload;
    //   const newState = [];
    //   state.forEach((task) => {
    //     const { id, description, createdDate, files, expirationDate, status, title } = task;
    //     if (task.id === generalTaskId) {
    //         const replaceTasks = subTasks.filter((subtask) => subtask.id !== payload.id);
    //         newState.push({ id, description,createdDate, files, expirationDate, status, title, subTasks: replaceTasks });
    //     }
    //     else newState.push({...task});
    //   })
    //   return newState;
    case CHANGE_STATUS_DEVELOPMENT:
      const { updateTasks } = payload;
      return [...updateTasks];
    case EDIT_FILE:
      const replaceState = state.filter((task) => task.id !== payload.id);
      return [...replaceState, payload.data];
    // case DELETE_FILE:
    //     const { taskId, files } = payload;
    //     const replaceState = [];
    //     state.forEach((task) => {
    //       const { id, description, createdDate, expirationDate, status, title, subTasks } = task;
    //       if (task.id === taskId) {
    //           const replaceFiles = files;
    //           replaceState.push({ id, description, files: replaceFiles, createdDate, expirationDate, status, title, subTasks });
    //       }
    //       else replaceState.push({...task});
    //     });
    //     console.log(replaceState);
    //     return replaceState;
    default:
      return state;
  }
};

export default task;
