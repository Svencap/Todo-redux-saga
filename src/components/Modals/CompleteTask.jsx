import { useDispatch, useSelector } from "react-redux";
import { completeTask } from "../../redux/actions/actionCreator";

import "../../css/DeleteTaskModal.css";

const CompleteTask = ({ id, files, setActive }) => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state);

  const submit = (taskId) => {
    const updatedTasks = [...tasks].map(({ id, title, description, status, priority, createdDate, subTasks, expirationDate, files }) => {
      if (id === taskId) {
        const newStatus = 'Done';
        const checkFiles = files ? files : [];
        return { id, title, description, status: newStatus, priority, createdDate, expirationDate, subTasks, files: checkFiles };
      }
      return { id, title, description, status, subTasks, priority, createdDate, expirationDate, files };
    });
    dispatch(completeTask({ id, status: 'Done', updatedTasks}))
  }

  return (
    <div className="delete_wrapper">
      <div className="delete_modal_header">
        <span>Завершить задачу</span>
        <button className="close_delete_modal" onClick={() => setActive(false)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 5L5 19M19 19L5 5"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      <div className="delete_modal_body">Вы действительно хотите завершить задачу?</div>
      <div className="delete_modal_buttons">
        <button onClick={() => setActive(false)} className="close">
          Закрыть
        </button>
        <button onClick={() => {
          submit(id);
          // setActive(false);
        }} className="complete">
          Завершить
        </button>
      </div>
    </div>
  );
};
export default CompleteTask;