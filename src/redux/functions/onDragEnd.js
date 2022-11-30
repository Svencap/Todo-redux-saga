const onDragEnd = (tasks, result, startIndex, endIndex, dispatch, actionSortedTaks, actionChangeDev) => {
  console.log(tasks, result);
  const sortedTaks = [...tasks];
  if (!result.destination) return;

  if (result.destination.droppableId === "development") {
    const updateTasks = [...tasks].map(({ id, title, description, status, subTasks, expirationDate, files }) => {
      if (id === result.draggableId) {
        const newStatus = 'Development';
        const checkFiles = files ? files : [];
        return { id, title, description, status: newStatus, expirationDate, subTasks, files: checkFiles };
      }
      return { id, title, description, status, subTasks, expirationDate, files };
    });
    dispatch(actionChangeDev({id: result.draggableId, status: 'Development', updateTasks}));
  }

  if (result.destination.droppableId === "to_do") {
    const updateTasks = [...tasks].map(({ id, title, description, status, subTasks, expirationDate, files }) => {
      if (id === result.draggableId) {
        const newStatus = 'Queue';
        const checkFiles = files ? files : [];
        return { id, title, description, status: newStatus, expirationDate, subTasks, files: checkFiles };
      }
      return { id, title, description, status, subTasks, expirationDate, files };
    });
    dispatch(actionChangeDev({id: result.draggableId, status: 'Queue', updateTasks}));
  }

  if (result.destination.droppableId === "Done") {
    const updateTasks = [...tasks].map(({ id, title, description, status, subTasks, expirationDate, files }) => {
      if (id === result.draggableId) {
        const newStatus = 'Done';
        const checkFiles = files ? files : [];
        return { id, title, description, status: newStatus, expirationDate, subTasks, files: checkFiles };
      }
      return { id, title, description, status, subTasks, expirationDate, files };
    });
    dispatch(actionChangeDev({id: result.draggableId, status: 'Done', updateTasks}));
  }

  // const [removed] = sortedTaks.splice(startIndex, 1);
  // sortedTaks.splice(endIndex, 0, removed);
  // dispatch(actionSortedTaks(sortedTaks));
};

export default onDragEnd;