import '../../css/DeleteTaskModal.css';


const DeleteTask = ({ active, setActive }) => {
  return (
    <div className="delete_wrapper">
      <div className="delete_modal_header">
        <span>Удалить</span>
        <button onClick={() => setActive(false)}>Х</button>
      </div>
      <div className="delete_modal_body">Вы не сможете восстановить задачу</div>
      <div className="delete_modal_buttons">
        <button onClick={() => setActive(false)} className='close'>Закрыть</button>
        <button onClick={() => setActive(false)} className='delete'>Удалить</button>
      </div>
    </div>
  );
};
export default DeleteTask;
