import {
  GET_TASKS,
  SET_TASKS,
  ADD_TASK,
  UPLOAD_FILES,
  SORTED_TASKS,
  CHANGE_STATUS_DEVELOPMENT,
  DELETE_TASK,
  DELETE_SUBTASK,
  DELETE_FILE,
  EDIT_FILE,
  SET_EDIT_TASK,
} from "../contants";

export const getTasks = () => ({ type: GET_TASKS });
export const setTasks = (payload) => ({ type: SET_TASKS, payload });
export const addTask = (payload) => ({ type: ADD_TASK, payload });
export const uploadFiles = (payload) => ({ type: UPLOAD_FILES, payload });
export const sortedTaks = (payload) => ({ type: SORTED_TASKS, payload });

export const changeStatusDevelopment = (payload) => ({
  type: CHANGE_STATUS_DEVELOPMENT,
  payload,
});

export const deleteTask = (payload) => ({ type: DELETE_TASK, payload });
export const deleteSubTask = (payload) => ({ type: DELETE_SUBTASK, payload });
export const deleteFile = (payload) => ({ type: DELETE_FILE, payload });

export const editTask = (payload) => ({ type: EDIT_FILE, payload });

export const setEditTask = (payload) => ({ type: SET_EDIT_TASK, payload });
