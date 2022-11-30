import { GET_TASKS, SET_TASKS, ADD_TASK, UPLOAD_FILES, SORTED_TASKS, CHANGE_STATUS_DEVELOPMENT } from "../contants";

export const getTasks = () => ({ type: GET_TASKS });
export const setTasks = (payload) => ({ type: SET_TASKS, payload });
export const addTask = (payload) => ({ type: ADD_TASK, payload });
export const uploadFiles = (payload) => ({type: UPLOAD_FILES, payload }); 
export const sortedTaks = (payload) => ({type: SORTED_TASKS, payload });
export const changeStatusDevelopment = (payload) => ({type: CHANGE_STATUS_DEVELOPMENT, payload });