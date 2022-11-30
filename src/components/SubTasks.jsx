const SubTasks = ({ subTasks }) => {
  return (
    <div className="subtasks">
      {subTasks.map(({id, name}) => (
        <div key={id + name} className="sub_task">
          <input type="checkbox" id={name} name={name} />
          <label htmlFor={name}>{name}</label>
        </div>
      ))}
    </div>
  );
};

export default SubTasks;