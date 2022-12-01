import { takeEvery, put } from "@redux-saga/core/effects";
import { GET_TASKS, ADD_TASK, UPLOAD_FILES, CHANGE_STATUS_DEVELOPMENT } from "../contants";
import { getDataTasks } from "../functions/getDataTasks";
import { addTaskToDB } from "../functions/addTaskToDB";
import downloadFiles from "../functions/downloadFiles";
import { setTasks, addTask } from "../actions/actionCreator";
import updateToDatabase from "../functions/updateTaskToDB";

export function* workerSaga() {
    const data = yield getDataTasks();
    yield put(setTasks(data));
}

export function* workerAddTask({ payload }) {
    const { id, title, description, expirationDate, priority, createdDate, status, subTasks, files } = payload;
    const filesUrl = yield downloadFiles(files);
    const data = { id, title, description, expirationDate, priority, createdDate, status, subTasks, files: filesUrl };
    yield addTaskToDB(id, data);
    yield put(addTask(data));
    yield;
}

export function* workerUpdateTask({ payload }) {
    const { id, status } = payload;
    yield updateToDatabase(id, { status });
    yield;
}

export function* watchSaga() {
    yield takeEvery(GET_TASKS, workerSaga);
    yield takeEvery(UPLOAD_FILES, workerAddTask);
    yield takeEvery(CHANGE_STATUS_DEVELOPMENT, workerUpdateTask);
}

export default function* rootSaga() {
    yield watchSaga();
}