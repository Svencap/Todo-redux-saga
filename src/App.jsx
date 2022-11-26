import "./App.css";
import Task from "./Task";

function App() {
  return (
    <div className="App">
      <div className="container_app">
        <div className="header">
            <button type="submit">Добавить задачу</button>
            <div className="search_task">
              <input type="text" className="input_search" placeholder="Найти задачу" />
            </div>
        </div>
        <div className="container">
          <div className="TO_DO">
            <span>Queue</span>
            <Task />
          </div>
          <div className="TO_DO">
            <span>Development</span>
            <Task />
          </div>
          <div className="TO_DO">
            <span>Done</span>
            <Task />
            <Task />
            <Task />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
