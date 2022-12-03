import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/actions/actionCreator";

import "../../css/DeleteTaskModal.css";

const DeleteTask = ({ id, files, setActive }) => {
  const dispatch = useDispatch();
  return (
    <div className="delete_wrapper">
      <div className="delete_modal_header">
        <span>Удалить задачу</span>
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
      <div className="delete_modal_body">Вы действительно хотите удалить?</div>
      <div className="delete_modal_buttons">
        <button onClick={() => setActive(false)} className="close">
          Закрыть
        </button>
        <button onClick={() => {
          dispatch(deleteTask({ id, files }));
          // setActive(false);
        }} className="delete">
          Удалить
        </button>
      </div>
    </div>
  );
};
export default DeleteTask;
