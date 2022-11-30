import uploadFilesToStorage from "./uploadFilesToStorage";

const downloadFiles = async (files) => {
  return Promise.all(files.map(async ({ id, name, selectedFile, url }) => {
    const getName = name ? name : selectedFile.name;
    const getId = `${id}_${getName}`;
    const getUrl = url ? url : await uploadFilesToStorage(getId, selectedFile);
    return { id: getId, name: getName, url: getUrl };
  }))
};

export default downloadFiles;