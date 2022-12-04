import { useState } from "react";

import SubTasks from "./SubTasks";
import { Draggable } from "react-beautiful-dnd";
import ActiveStatus from "./Statuses/Active";
import PriorityNormal from "./Statuses/PriorityNormal";
import PriorityHigh from "./Statuses/PriorityHigh";
import "moment/locale/ru";
import moment from "moment";
import Modal from "./Modals/Modal";
import DeleteTask from "./Modals/DeleteTask";
import EditTask from "./Modals/EditTask";
import CompleteTask from "./Modals/CompleteTask";

const Task = ({
  id,
  title,
  description,
  expirationDate,
  createdDate,
  subTasks,
  status,
  files,
  index,
  priority,
}) => {
  const [activeDeleteModal, setActiveDeleteModal] = useState(false);
  const [activeEditModal, setActiveEditModal] = useState(false);
  const [activeCompleteModal, setActiveCompleteModal] = useState(false);

  // moment(createdDate).fromNow(true)
  return (
    <Draggable key={id} index={index} draggableId={id}>
      {(provided) => {
        return (
          <>
            <Modal active={activeDeleteModal} setActive={setActiveDeleteModal}>
              <DeleteTask
                setActive={setActiveDeleteModal}
                id={id}
                files={files}
              />
            </Modal>
            <Modal
              active={activeCompleteModal}
              setActive={setActiveCompleteModal}
            >
              <CompleteTask id={id} setActive={setActiveCompleteModal} />
            </Modal>
            {activeEditModal ? (
              <Modal active={activeEditModal} setActive={setActiveEditModal}>
                <EditTask taskId={id} setActive={setActiveEditModal} />
              </Modal>
            ) : null}
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className="Task"
            >
              <div className="content">
                <div className="task_info">
                  <div className="status">
                    <div className="status-prioriry">
                      <ActiveStatus />
                      {priority?.value === 0 ? (
                        <PriorityNormal />
                      ) : (
                        <PriorityHigh />
                      )}
                    </div>
                    {status !== "Done" ? (
                      <div
                        onClick={() => setActiveEditModal(true)}
                        className="edit_task"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.0487 3.35143H5.04873C3.06051 3.35143 1.44873 4.96321 1.44873 6.95143V18.9515C1.44873 20.9398 3.06051 22.5515 5.04873 22.5515H17.0487C19.037 22.5515 20.6487 20.9398 20.6487 18.9515L20.6487 12.9515M7.44873 16.5514L11.8147 15.6717C12.0465 15.625 12.2593 15.5109 12.4264 15.3437L22.2001 5.56461C22.6687 5.09576 22.6684 4.33577 22.1994 3.86731L20.129 1.79923C19.6602 1.33097 18.9006 1.33129 18.4322 1.79995L8.65749 11.58C8.49068 11.7469 8.37678 11.9593 8.33003 12.1906L7.44873 16.5514Z"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    ) : null}
                  </div>
                  <span className="title_task">{title}</span>
                  <span className="created_date">
                    {moment(createdDate).locale("ru").format("ll")}
                  </span>
                  {description !== "" ? (
                    <div className="description">{description}</div>
                  ) : null}
                  <SubTasks subTasks={subTasks} />
                  {files?.length ? (
                    <div className="selected_files">
                      {files.map(({ id, name, url }) => {
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
                      })}
                    </div>
                  ) : null}
                  <div className="expiration_date">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z"
                        fill="white"
                      />
                      <path
                        d="M13 7H11V12.414L14.293 15.707L15.707 14.293L13 11.586V7Z"
                        fill="white"
                      />
                    </svg>
                    {moment(expirationDate).locale("ru").format("l")}
                  </div>
                  <div className="task_buttons">
                    {status !== "Done" ? (
                      <button
                        onClick={() => setActiveCompleteModal(true)}
                        className="finished_task"
                      >
                        Завершить
                      </button>
                    ) : null}
                    <button
                      onClick={() => setActiveDeleteModal(true)}
                      className="delete_task"
                    >
                      Удалить
                    </button>
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
          </>
        );
      }}
    </Draggable>
  );
};

export default Task;
