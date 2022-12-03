import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { addTask, uploadFiles } from "../../redux/actions/actionCreator";
import SubTasks from "../SubTasks";
import "moment/locale/ru";
import moment from "moment";
import SelectPriority from "../SelectPriority";

import "../../css/addTask.css";

const AddTask = ({ active, setActive }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [files, setFiles] = useState([]);

  const subtaskRef = useRef();

  const [subTaskTitle, setSubTaskTitle] = useState("");
  const [subTasks, setSubTasks] = useState([]);
  const [priority, setPriority] = useState({
    value: 0,
    text: "Выберите приоритет",
  });

  const dispatch = useDispatch();

  const id = v4();
  const reduceSubtasks = subTasks.map((name) => {
    if (typeof name === 'object') {
      return name;
    }
    return { generalTaskId: id, id: v4(), name };
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      id,
      title,
      description,
      files,
      status: "Queue",
      expirationDate,
      createdDate: moment.now(),
      priority: priority,
      subTasks: reduceSubtasks,
    };

    dispatch(uploadFiles({ taskId: id, data }));
    setTitle("");
    setDescription('');
    setExpirationDate('');
    setFiles([]);
    setSubTaskTitle('');
    setSubTasks([]);
    setActive(false);
  };

  const [show, setShow] = useState(false);


  const deleteSelectedFile = (id) => {
    const result = files.filter((file) => file.id !== id);
    setFiles(result);
  };

  return (
    <div className="add_task_form">
      <form onSubmit={handleSubmit} action="">
        <input
          className="form_task_title"
          type="text"
          placeholder="Название задачи"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="form_task_description"
          name=""
          id=""
          cols="10"
          placeholder="Описание задачи"
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="sub_tasks_container">
          {subTasks.length ? (
            <div className="subtasks">
              Список
              <SubTasks key={'new_subtask'} active={active} setNewTasks={setSubTasks} subTasks={reduceSubtasks} />
            </div>
          ) : null}
          <div className="subtasks_wrapper">
            <input
              className="text_subtask"
              value={subTaskTitle}
              type="text"
              placeholder="Добавить список"
              onChange={(e) => setSubTaskTitle(e.target.value)}
            />
            <button
              className="add_subtask"
              onClick={(e) => {
                e.preventDefault();
                if (subTaskTitle.trim() !== "") {
                  setSubTasks((prevTask) => [...prevTask, subTaskTitle]);
                  setSubTaskTitle("");
                }
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.9">
                  e
                  <path
                    d="M15.6 11.9993H12M12 11.9993H8.40002M12 11.9993V15.5993M12 11.9993L12 8.39932M21.6 11.9999C21.6 17.3018 17.302 21.5999 12 21.5999C6.69809 21.5999 2.40002 17.3018 2.40002 11.9999C2.40002 6.69797 6.69809 2.3999 12 2.3999C17.302 2.3999 21.6 6.69797 21.6 11.9999Z"
                    stroke={subTaskTitle.length ? "#5533FF" : "#98a2b3"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div className="files">
          {files.map(({ id, selectedFile }) => {
            return (
              <div key={id} className="file">
                <div className="selected">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.37851 10.1907L5.14505 12.4242C4.31092 13.2583 3.83124 14.3933 3.84001 15.5861C3.84877 16.7789 4.31796 17.9208 5.19167 18.7675C6.03836 19.6413 7.18048 20.1104 8.3731 20.1192C9.59293 20.1282 10.701 19.6755 11.5352 18.8414L13.7687 16.6079M16.6215 13.8097L18.8549 11.5762C19.6891 10.7421 20.1688 9.60711 20.16 8.4143C20.1512 7.22149 19.682 6.0796 18.8083 5.23287C17.9618 4.38638 16.8199 3.91717 15.6271 3.90841C14.4343 3.89964 13.2992 4.35209 12.465 5.18625L10.2315 7.4197M8.6131 15.3274L15.3135 8.62701"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text_file">{selectedFile?.name}</span>
                </div>
                <button
                  className="delete_selected_file"
                  onClick={() => {
                    deleteSelectedFile(id);
                  }}
                >
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
            );
          })}
        </div>
        <label className="label_file">
          Добавить файл
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.2998 19.1998L2.2998 19.1998L3.2998 19.1998ZM3.2999 4.79989L4.2999 4.7999L3.2999 4.79989ZM5.69979 21.5998L5.69979 22.5998H5.69979V21.5998ZM11.6998 22.5998C12.2521 22.5998 12.6998 22.1521 12.6998 21.5998C12.6998 21.0476 12.2521 20.5998 11.6998 20.5998V22.5998ZM17.9002 9.5999C17.9002 10.1522 18.3479 10.5999 18.9002 10.5999C19.4525 10.5999 19.9002 10.1522 19.9002 9.5999H17.9002ZM7.50018 6.1999C6.94789 6.1999 6.50018 6.64762 6.50018 7.1999C6.50018 7.75219 6.94789 8.1999 7.50018 8.1999V6.1999ZM14.7002 8.1999C15.2525 8.1999 15.7002 7.75219 15.7002 7.1999C15.7002 6.64762 15.2525 6.1999 14.7002 6.1999V8.1999ZM7.50018 9.7999C6.94789 9.7999 6.50018 10.2476 6.50018 10.7999C6.50018 11.3522 6.94789 11.7999 7.50018 11.7999V9.7999ZM14.7002 11.7999C15.2525 11.7999 15.7002 11.3522 15.7002 10.7999C15.7002 10.2476 15.2525 9.7999 14.7002 9.7999V11.7999ZM15.7002 15.5539C15.7002 15.0016 15.2525 14.5539 14.7002 14.5539C14.1479 14.5539 13.7002 15.0016 13.7002 15.5539H15.7002ZM16.7065 18.3433C16.7065 18.8956 17.1543 19.3433 17.7065 19.3433C18.2588 19.3433 18.7065 18.8956 18.7065 18.3433H16.7065ZM7.50018 13.3999C6.94789 13.3999 6.50018 13.8476 6.50018 14.3999C6.50018 14.9522 6.94789 15.3999 7.50018 15.3999V13.3999ZM11.1002 15.3999C11.6525 15.3999 12.1002 14.9522 12.1002 14.3999C12.1002 13.8476 11.6525 13.3999 11.1002 13.3999V15.3999ZM5.6999 3.3999H16.5002V1.3999H5.6999V3.3999ZM4.2998 19.1998L4.2999 4.7999L2.2999 4.79988L2.2998 19.1998L4.2998 19.1998ZM2.2998 19.1998C2.29979 21.0776 3.82202 22.5998 5.69979 22.5998L5.6998 20.5998C4.9266 20.5998 4.2998 19.973 4.2998 19.1998L2.2998 19.1998ZM5.6999 1.3999C3.82214 1.3999 2.29991 2.92212 2.2999 4.79988L4.2999 4.7999C4.2999 4.0267 4.9267 3.3999 5.6999 3.3999V1.3999ZM11.6998 20.5998H5.69979V22.5998H11.6998V20.5998ZM17.9002 4.7999V9.5999H19.9002V4.7999H17.9002ZM16.5002 3.3999C17.2734 3.3999 17.9002 4.02671 17.9002 4.7999H19.9002C19.9002 2.92213 18.3779 1.3999 16.5002 1.3999V3.3999ZM7.50018 8.1999H14.7002V6.1999H7.50018V8.1999ZM7.50018 11.7999H14.7002V9.7999H7.50018V11.7999ZM13.7002 15.5539V18.4982H15.7002V15.5539H13.7002ZM21.7002 18.4982V14.779H19.7002V18.4982H21.7002ZM16.7065 14.779V18.3433H18.7065V14.779H16.7065ZM19.2723 12.2271C18.4771 12.2271 17.8079 12.532 17.3474 13.0492C16.9038 13.5474 16.7065 14.1819 16.7065 14.779H18.7065C18.7065 14.6059 18.7653 14.4644 18.8411 14.3792C18.9001 14.3129 19.0139 14.2271 19.2723 14.2271V12.2271ZM21.7002 14.779C21.7002 14.2172 21.5407 13.5937 21.1359 13.0887C20.7077 12.5545 20.0609 12.2271 19.2723 12.2271V14.2271C19.3836 14.2271 19.448 14.2484 19.4827 14.2649C19.5176 14.2814 19.5473 14.3046 19.5754 14.3397C19.6382 14.4181 19.7002 14.5706 19.7002 14.779H21.7002ZM17.7065 22.2877C18.7264 22.2877 19.7062 21.8295 20.422 21.1782C21.1368 20.5278 21.7002 19.5793 21.7002 18.4982H19.7002C19.7002 18.8721 19.4942 19.3184 19.076 19.6989C18.6587 20.0786 18.1416 20.2877 17.7065 20.2877V22.2877ZM13.7002 18.4982C13.7002 19.5822 14.2695 20.5311 14.9868 21.1801C15.7052 21.8301 16.6874 22.2877 17.7065 22.2877V20.2877C17.2707 20.2877 16.7497 20.078 16.3287 19.697C15.9065 19.3151 15.7002 18.8692 15.7002 18.4982H13.7002ZM7.50018 15.3999H11.1002V13.3999H7.50018V15.3999Z"
              fill="white"
            />
          </svg>
          <input
            type="file"
            className="input_files"
            onChange={({ target }) =>
              setFiles((prevFiles) => {
                const [selectedFile] = target.files;
                return [
                  ...prevFiles,
                  { id: `${v4()}_${selectedFile?.name}`, selectedFile },
                ]
              })
            }
            name="file"
            id=""
          />
        </label>
        <div className="priority_container">
          <SelectPriority
            show={show}
            setShow={setShow}
            priority={priority}
            setPriority={setPriority}
          />
        </div>
        <div className="datetime_container">
          <label htmlFor="data">Выполнить до</label>
          <input
            type="date"
            onChange={(e) => setExpirationDate(e.target.value)}
            name=""
            id="data"
            required
          />
        </div>
        <button className="form_task_submit" type="submit">
          Добавить задачу
        </button>
      </form>
      <button onClick={() => setActive(false)} className="close_modal">
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
  );
};

export default AddTask;
