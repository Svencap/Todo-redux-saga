import { database, storRef, storage } from "../../firebase-config";
import { deleteObject } from "firebase/storage";
import { ref, remove } from "firebase/database";


const deleteTask = (id, files) => {
  if (files?.length) {
    files.forEach(async ({ id }) => {
      const deletedFileRef = storRef(storage, `files/${id}`);
        await deleteObject(deletedFileRef);
    });
  }
  remove(ref(database, `/${id}`));
};

export default deleteTask;