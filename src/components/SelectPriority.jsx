const SelectPriority = ({ show, setShow, priority, setPriority, edit }) => {
  const ulDisplay = { display: show ? "block" : "none" };
  
  return (
    <div
      className={show ? "select-menu active" : "select-menu"}
      onClick={() => (show ? setShow(false) : setShow(true))}
    >
      <div className="select-btn">
        {edit && priority.value === 0 ? <span className="sBtn-text">Низкий</span> : <span className="sBtn-text">{priority.text}</span>}
        <i className="bx bx-chevron-down">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                d="M3 6.75L9 12.75L15 6.75"
                stroke="#5533FF"
                strokeWidth="2"
                strokeLinecap="square"
              />
            </g>
          </svg>
        </i>
      </div>
      <ul className="options" style={ulDisplay}>
        <li
          className="option"
          onClick={() => setPriority({ value: 0, text: "Низкий" })}
        >
          <span className="option-text">Низкий</span>
        </li>
        <li
          className="option"
          onClick={() => setPriority({ value: 2, text: "Высокий" })}
        >
          <span className="option-text">Высокий</span>
        </li>
      </ul>
    </div>
  );
};

export default SelectPriority;
