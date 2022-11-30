import { database } from "../../firebase-config";
import { ref, onValue } from "firebase/database";

export const getDataTasks = async () => {
    return new Promise((resolve, reject) => {
        onValue(ref(database), (snapshot) => {
            const data = snapshot.val();
            const tasks = data ? Object.values(data) : [];
            resolve(tasks);
          });
    })
};  
