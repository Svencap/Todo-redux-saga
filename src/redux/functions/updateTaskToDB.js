import { database } from "../../firebase-config";
import { update, ref } from "firebase/database";


const updateToDatabase = async (taskId, data) => await update(ref(database, `/${taskId}`), data);

export default updateToDatabase;