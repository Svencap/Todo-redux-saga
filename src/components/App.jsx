import "../css/App.css";
import Task from "./Task";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getTasks, addTask } from "../redux/actions/actionCreator";
import { v4 } from "uuid";
import Modal from "./Modals/Modal";
import AddTask from "./Modals/AddTask";
import TaskList from "./TasksList";

function App() {
  const dispatch = useDispatch();

  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
      <div className="App">
        <div className="container_app">
          <div className="header">
            <button
              className="submit_task"
              onClick={() => setModalActive(true)}
            >
              Добавить задачу
            </button>
            <div className="search_task">
              <input
                type="text"
                className="input_search"
                placeholder="Найти задачу"
              />
            </div>
          </div>
          <TaskList />
        </div>
        <Modal active={modalActive} setActive={setModalActive}>
          <AddTask setActive={setModalActive} />
        </Modal>
      </div>
  );
}

export default App;
