import SubTasks from "./SubTasks";
import { Draggable } from "react-beautiful-dnd";

const Task = ({ id, title, description, expirationDate, subTasks, files, index }) => {
  return (
    <Draggable key={id} index={index} draggableId={id}>
      {(provided) => {
        return (
          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="Task">
            <div className="content">
              <div className="task_info">
                <span className="title_task">{title}</span>
                <span className="created_date">{expirationDate}</span>
                <div className="description">{description}</div>
                <SubTasks subTasks={subTasks} />
                <div className="selected_files">
                  {files?.length > 0
                    ? files.map(({ id, name, url }) => {
                        return (
                          <div key={id} className="file">
                            <a href={url} download="true">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_661_3756)">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M9 7V1C9 0.447716 8.55228 0 8 0C7.44772 0 7 0.447716 7 1V7H5C4.59554 7 4.2309 7.24364 4.07612 7.61732C3.92134 7.99099 4.0069 8.42111 4.29289 8.70711L7.29289 11.7071C7.68342 12.0976 8.31658 12.0976 8.70711 11.7071L11.7071 8.70711C11.9931 8.42111 12.0787 7.99099 11.9239 7.61732C11.7691 7.24364 11.4045 7 11 7H9ZM2 11C2.55228 11 3 11.4477 3 12V13C3 13.5523 3.44772 14 4 14H12C12.5523 14 13 13.5523 13 13V12C13 11.4477 13.4477 11 14 11C14.5523 11 15 11.4477 15 12V13C15 14.6569 13.6569 16 12 16H4C2.34315 16 1 14.6569 1 13V12C1 11.4477 1.44772 11 2 11Z"
                                    fill="#060E1F"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_661_3756">
                                    <rect width="16" height="16" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                              <span className="file_name">{name}</span>
                            </a>
                          </div>
                        );
                      })
                    : null}
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
                <span className="count_comments">0</span>
              </div>
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};

export default Task;
