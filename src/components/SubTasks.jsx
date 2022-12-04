const SubTasks = ({ active, subTasks, edit, setNewTasks }) => {

  const deleteSubtask = (subtaskId) => {
    const newTasks = subTasks.filter((task) => task.id !== subtaskId);
    setNewTasks(newTasks);
  };

  const completeSubtask = (subtaskId) => {
    const { generalTaskId, id, name } = subTasks.find(
      (task) => task.id === subtaskId
    );
    const getTasks = subTasks.filter((task) => task.id !== subtaskId);
    const newStatus = "close";
    const newTask = { generalTaskId, id, name, status: newStatus };
    setNewTasks([...getTasks, newTask]);
  };

  return (
    <div className="subtasks">
      {subTasks?.map(({ generalTaskId, id, name, status }) => (
        <div key={id} className="sub_task">
          <span className="sub_task_title">
            {status === "active" ? (
              <svg
                width="20"
                height="18"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.1442 18.3085H15.3556M18.0985 21.5999H7.40134C6.79541 21.5999 6.3042 21.1087 6.3042 20.5028V17.5719C6.3042 17.3377 6.37915 17.1096 6.51808 16.9211L9.66464 12.6507C9.94982 12.2637 9.94982 11.7361 9.66464 11.3491L6.51808 7.07874C6.37915 6.89019 6.3042 6.66213 6.3042 6.42792V3.49705C6.3042 2.89111 6.79541 2.3999 7.40134 2.3999H17.8242C18.4301 2.3999 18.9213 2.89111 18.9213 3.49705V6.44906C18.9213 6.67016 18.8545 6.88611 18.7297 7.0686L15.7956 11.3568C15.5321 11.7419 15.5411 12.2515 15.8178 12.6272L18.9817 16.9211C19.1207 17.1096 19.1956 17.3377 19.1956 17.5719V20.5028C19.1956 21.1087 18.7044 21.5999 18.0985 21.5999Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.8 8.3999L9.64043 15.5999L7.19995 13.1456"
                  stroke="#12b76a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            {name}
          </span>
          {edit ? (
            <div className="edit_buttons">
              {status === "active" ? (
                <button
                  onClick={() => completeSubtask(id)}
                  className="unselect_subtask success"
                >
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.6 9.5999L10.2304 14.3999L8.40002 12.7637M21.6 5.9999L21.6 18C21.6 19.9882 19.9882 21.6 18 21.6H6.00002C4.0118 21.6 2.40002 19.9882 2.40002 18V5.9999C2.40002 4.01168 4.0118 2.3999 6.00002 2.3999H18C19.9882 2.3999 21.6 4.01168 21.6 5.9999Z"
                      stroke="#12b76a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              ) : null}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  deleteSubtask(id);
                }}
                className="unselect_subtask"
              >
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.6 19.7998L17.6009 19.7582L17.6 19.779V19.7998H18.6ZM19.1479 6.64976L18.1488 6.60813V6.60813L19.1479 6.64976ZM5.39999 19.7998H6.39999V19.779L6.39913 19.7582L5.39999 19.7998ZM4.85208 6.64976L3.85294 6.69139L4.85208 6.64976ZM2.39999 4.3998C1.84771 4.3998 1.39999 4.84752 1.39999 5.3998C1.39999 5.95209 1.84771 6.39981 2.39999 6.39981V4.3998ZM21.6 6.39981C22.1523 6.39981 22.6 5.95209 22.6 5.3998C22.6 4.84752 22.1523 4.3998 21.6 4.3998V6.39981ZM8.39999 0.799805C7.84771 0.799805 7.39999 1.24752 7.39999 1.7998C7.39999 2.35209 7.84771 2.7998 8.39999 2.7998V0.799805ZM15.6 2.7998C16.1523 2.7998 16.6 2.35209 16.6 1.7998C16.6 1.24752 16.1523 0.799805 15.6 0.799805V2.7998ZM8.59999 17.3998C8.59999 17.9521 9.04771 18.3998 9.59999 18.3998C10.1523 18.3998 10.6 17.9521 10.6 17.3998H8.59999ZM10.6 10.1998C10.6 9.64752 10.1523 9.19981 9.59999 9.19981C9.04771 9.19981 8.59999 9.64752 8.59999 10.1998H10.6ZM13.4 17.3998C13.4 17.9521 13.8477 18.3998 14.4 18.3998C14.9523 18.3998 15.4 17.9521 15.4 17.3998H13.4ZM15.4 10.1998C15.4 9.64752 14.9523 9.19981 14.4 9.19981C13.8477 9.19981 13.4 9.64752 13.4 10.1998H15.4ZM16.2 21.1998H7.79999V23.1998H16.2V21.1998ZM17.6 19.7998C17.6 20.573 16.9732 21.1998 16.2 21.1998V23.1998C18.0778 23.1998 19.6 21.6776 19.6 19.7998H17.6ZM18.1488 6.60813L17.6009 19.7582L19.5991 19.8414L20.147 6.69139L18.1488 6.60813ZM6.39913 19.7582L5.85121 6.60813L3.85294 6.69139L4.40086 19.8414L6.39913 19.7582ZM7.79999 21.1998C7.0268 21.1998 6.39999 20.573 6.39999 19.7998H4.39999C4.39999 21.6776 5.92223 23.1998 7.79999 23.1998V21.1998ZM17.949 4.3998H6.05103V6.39981H17.949V4.3998ZM5.85121 6.60813C5.84647 6.49451 5.93731 6.39981 6.05103 6.39981V4.3998C4.80007 4.3998 3.80086 5.44152 3.85294 6.69139L5.85121 6.60813ZM20.147 6.69139C20.1991 5.44152 19.1999 4.3998 17.949 4.3998V6.39981C18.0627 6.39981 18.1535 6.4945 18.1488 6.60813L20.147 6.69139ZM2.39999 6.39981H21.6V4.3998H2.39999V6.39981ZM8.39999 2.7998H15.6V0.799805H8.39999V2.7998ZM10.6 17.3998V10.1998H8.59999V17.3998H10.6ZM15.4 17.3998V10.1998H13.4V17.3998H15.4Z"
                    fill="#fc0d54"
                  />
                </svg>
              </button>
            </div>
          ) : null}
          {active ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                deleteSubtask(id);
              }}
              className="unselect_subtask"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 7L7 17M17 17L7 7"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default SubTasks;
