const Task = () => {
  return (
    <div className="Task">
      <div className="content">
        <div className="task_info">
          <span className="title_task">Make a Kanban App</span>
          <span className="created_date">12th Jan</span>
          <div className="description">
            Please use trello and designs in Dribbble as reference. And carry on
          </div>
          <div className="subtasks">
            <div className="sub_task">
              <input type="checkbox" id="scales" name="scales"/>
              <label htmlFor="scales">Scales</label>
            </div>
            <div className="sub_task">
              <input type="checkbox" id="horns" name="horns" />
              <label htmlFor="horns">Horns</label>
            </div>
          </div>
          <div className="selected_files">
            <div className="file">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3713 7.62868C9.19975 6.45711 7.30025 6.45711 6.12868 7.62868L3.12868 10.6287C1.95711 11.8003 1.95711 13.6997 3.12868 14.8713C4.30025 16.0429 6.19975 16.0429 7.37132 14.8713L8.19749 14.0451M7.62868 10.3713C8.80025 11.5429 10.6997 11.5429 11.8713 10.3713L14.8713 7.37132C16.0429 6.19975 16.0429 4.30025 14.8713 3.12868C13.6997 1.95711 11.8003 1.95711 10.6287 3.12868L9.80397 3.95339"
                  stroke="#98A2B3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="file_name">docs.google.c</div>
            </div>
            <div className="file">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3713 7.62868C9.19975 6.45711 7.30025 6.45711 6.12868 7.62868L3.12868 10.6287C1.95711 11.8003 1.95711 13.6997 3.12868 14.8713C4.30025 16.0429 6.19975 16.0429 7.37132 14.8713L8.19749 14.0451M7.62868 10.3713C8.80025 11.5429 10.6997 11.5429 11.8713 10.3713L14.8713 7.37132C16.0429 6.19975 16.0429 4.30025 14.8713 3.12868C13.6997 1.95711 11.8003 1.95711 10.6287 3.12868L9.80397 3.95339"
                  stroke="#98A2B3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="file_name">docs.google.c</div>
            </div>
            <div className="file">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3713 7.62868C9.19975 6.45711 7.30025 6.45711 6.12868 7.62868L3.12868 10.6287C1.95711 11.8003 1.95711 13.6997 3.12868 14.8713C4.30025 16.0429 6.19975 16.0429 7.37132 14.8713L8.19749 14.0451M7.62868 10.3713C8.80025 11.5429 10.6997 11.5429 11.8713 10.3713L14.8713 7.37132C16.0429 6.19975 16.0429 4.30025 14.8713 3.12868C13.6997 1.95711 11.8003 1.95711 10.6287 3.12868L9.80397 3.95339"
                  stroke="#98A2B3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="file_name">docs.google.c</div>
            </div>
          </div>
        </div>
        <div className="comments_container">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.4183 16.9706 20 12 20C10.4607 20 9.01172 19.6565 7.74467 19.0511L3 20L4.39499 16.28C3.51156 15.0423 3 13.5743 3 12C3 7.58172 7.02944 4 12 4C16.9706 4 21 7.58172 21 12Z"
              stroke="#98A2B3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="count_comments">1</span>
        </div>
      </div>
    </div>
  );
};

export default Task;
