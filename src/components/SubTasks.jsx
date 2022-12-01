const SubTasks = ({ active, subTasks }) => {
  return (
    <div className="subtasks">
      {subTasks.map(({ id, name }) => (
        <div key={id + name} className="sub_task">
          <span className="sub_task_title">
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
            {name}
          </span>
          {active ? (
            <button className="unselect_subtask">
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
