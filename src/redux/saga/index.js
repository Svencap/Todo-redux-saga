import { takeEvery, put, select } from "@redux-saga/core/effects";
import { GET_TASKS, ADD_TASK, UPLOAD_FILES, CHANGE_STATUS_DEVELOPMENT, DELETE_TASK, EDIT_FILE} from "../contants";
import { getDataTasks } from "../functions/getDataTasks";
import { addTaskToDB } from "../functions/addTaskToDB";
import downloadFiles from "../functions/downloadFiles";
import { setTasks, addTask, setEditTask } from "../actions/actionCreator";
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
    const { generalTaskId, newTasks } = payload;
    yield updateToDatabase(generalTaskId, { subTasks: newTasks });
    yield;
}


export function* workerDeleteFile({ payload }) {
    const { taskId, id, getFiles } = payload;
    yield deleteFileInStorage(taskId, id, getFiles);
}


export function* workerEditTask({ payload }) {
    const { id, data } = payload;
    const { title, description, expirationDate, priority, createdDate, status, subTasks } = data;
    const { tasks } = yield select();
    const replaceState = tasks.filter((task) => task.id !== id);
    if (data.files.length) {
        const reduceFiles = yield downloadFiles(id, data.files);
        const updatedTask = yield { id, title, description, expirationDate, priority, createdDate, status, subTasks, files: reduceFiles };
        yield updateToDatabase(id, updatedTask);
        yield put(setEditTask([...replaceState, updatedTask]));
    }
    else {
        yield updateToDatabase(id, data);
        yield put(setEditTask([...replaceState, data]));
    }
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