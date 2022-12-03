import { storage, storRef } from "../../firebase-config";
import { deleteObject } from "firebase/storage";
import updateToDatabase from "./updateTaskToDB";

const deleteFileInStorage = async (generalTaskId, id, files) => {
  const deletedFileRef = storRef(storage, `files/${id}`);
  const newFileList = files.filter((file) => file.id !== id);
  await deleteObject(deletedFileRef);
  updateToDatabase(generalTaskId, { files: newFileList });
};

export default deleteFileInStorage;