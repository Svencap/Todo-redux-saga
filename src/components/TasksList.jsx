import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import onDragEnd from "../redux/functions/onDragEnd";
import { addTask } from "../redux/actions/actionCreator";
import { sortedTaks } from "../redux/actions/actionCreator";
import { changeStatusDevelopment } from "../redux/actions/actionCreator";

import Task from "./Task";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const activeTasks = tasks.filter(({ status }) => status === "Queue");
  const developmentTasks = tasks.filter(
    ({ status }) => status === "Development"
  );
  console.log(developmentTasks);
  const doneTasks = tasks.filter(({ status }) => status === "Done");

  return (
    <DragDropContext
      onDragEnd={(result) =>
        onDragEnd(
          tasks,
          result,
          result.source.index,
          result.destination.index,
          dispatch,
          sortedTaks,
          changeStatusDevelopment
        )
      }
    >
      <div className="container">
        <Droppable droppableId="to_do">
          {(provided) => {
            return (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="TO_DO"
              >
                <span>Queue</span>
                {activeTasks.map((task, idx) => (
                  <Task
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    description={task.description}
                    subTasks={task.subTasks}
                    expirationDate={task.expirationDate}
                    files={task.files}
                    index={idx}
                  />
                ))}
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
        <Droppable droppableId="development">
          {(provided) => {
            return (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="TO_DO"
              >
                <span>Development</span>
                {developmentTasks.map((task, idx) => (
                  <Task
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    description={task.description}
                    subTasks={task.subTasks}
                    expirationDate={task.expirationDate}
                    files={task.files}
                    index={idx}
                  />
                ))}
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
        <Droppable droppableId="Done">
          {(provided) => {
            return (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="TO_DO"
              >
                <span>Done</span>
                {doneTasks.map((task, idx) => (
                  <Task
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    description={task.description}
                    subTasks={task.subTasks}
                    expirationDate={task.expirationDate}
                    files={task.files}
                    index={idx}
                  />
                ))}
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default TaskList;

/* <Droppable droppableId="to_do">
{(provided) => {
  return (
    <div className="TO_DO">
      <span>Development</span>
    </div>
  );
}}
</Droppable> */

// {activeTasks.map(
//   ({ id, title, description, expirationDate, subTasks, files }) => (
//       <Task
//         key={id}
//         id={id}
//         title={title}
//         description={description}
//         subTasks={subTasks}
//         expirationDate={expirationDate}
//         files={files}
//       />
//   )
// )}
