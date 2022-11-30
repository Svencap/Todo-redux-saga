import { storage, storRef } from "../../firebase-config";
import { getDownloadURL, uploadBytes } from "firebase/storage";

const uploadFilesToStorage = async (id, file) => {
  if (file) {
    const storeFirebase = storRef(storage, `files/${id}`);
    await uploadBytes(storeFirebase, file);
    return await getDownloadURL(storeFirebase);
  }
  return "";
};

export default uploadFilesToStorage;