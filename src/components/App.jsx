import "../css/App.css";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getTasks } from "../redux/actions/actionCreator";
import Modal from "./Modals/Modal";
import AddTask from "./Modals/AddTask";
import TaskList from "./TasksList";

function App() {
  const dispatch = useDispatch();

  const [modalActive, setModalActive] = useState(false);

  const [filterSearch, setFilterSearch] = useState('');

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
                value={filterSearch}
                onChange={({ target }) => setFilterSearch(target.value)}
              />
            </div>
          </div>
          <TaskList search={filterSearch.trim()}/>
        </div>
        <Modal active={modalActive} setActive={setModalActive}>
          <AddTask active={modalActive} setActive={setModalActive} />
        </Modal>
      </div>
  );
}

export default App;
