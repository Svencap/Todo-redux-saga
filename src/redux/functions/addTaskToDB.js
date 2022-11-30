import { database } from "../../firebase-config";
import { set, ref } from "firebase/database";

export const addTaskToDB = (path, data) => set(ref(database, `/${path}`), data);