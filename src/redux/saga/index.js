import { takeEvery, put } from "@redux-saga/core/effects";
import { GET_TASKS, ADD_TASK, UPLOAD_FILES, CHANGE_STATUS_DEVELOPMENT, DELETE_TASK, EDIT_FILE} from "../contants";
import { getDataTasks } from "../functions/getDataTasks";
import { addTaskToDB } from "../functions/addTaskToDB";
import downloadFiles from "../functions/downloadFiles";
import { setTasks, addTask, editTask } from "../actions/actionCreator";
import updateToDatabase from "../functions/updateTaskToDB";
import deleteTask from "../functions/deleteTask";
import deleteFileInStorage from "../functions/deleteFile";

export function* workerSaga() {
    const data = yield getDataTasks();
    yield put(setTasks(data));
}

export function* workerAddTask({ payload }) {
    const { taskId, data } = payload;
    const { id, title, description, expirationDate, priority, createdDate, status, subTasks, files } = data;
    const filesUrl = yield downloadFiles(taskId, files);
    const task = { id, title, description, expirationDate, priority, createdDate, status, subTasks, files: filesUrl };
    yield addTaskToDB(taskId, task);
    yield put(addTask(task));
    yield;
}

export function* workerUpdateTask({ payload }) {
    const { id, status } = payload;
    yield updateToDatabase(id, { status });
    yield;
}

export function* workerDeleteTask({ payload }) {
    const { id, files } = payload;
    yield deleteTask(id, files);
    yield;
}


export function* workerDeleteSubTask({ payload }) {
    const { generalTaskId, newTasks } = payload;;
    yield updateToDatabase(generalTaskId, { subTasks: newTasks });
    yield;
}


export function* workerDeleteFile({ payload }) {
    const { taskId, id, getFiles } = payload;
    yield deleteFileInStorage(taskId, id, getFiles);
}


export function* workerEditTask({ payload }) {
    const { id, data } = payload;
    console.log(id, data);
    yield updateToDatabase(id, data);
    yield editTask({ id, data });
    yield;
}

export function* watchSaga() {
    yield takeEvery(GET_TASKS, workerSaga);
    yield takeEvery(UPLOAD_FILES, workerAddTask);
    yield takeEvery(CHANGE_STATUS_DEVELOPMENT, workerUpdateTask);
    yield takeEvery(DELETE_TASK, workerDeleteTask);
    yield takeEvery(EDIT_FILE, workerEditTask);
    // yield takeEvery(DELETE_SUBTASK, workerDeleteSubTask)
    // yield takeEvery(DELETE_FILE, workerDeleteFile);
}

export default function* rootSaga() {
    yield watchSaga();
}