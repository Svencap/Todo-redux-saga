import "../../css/Modal.css";


const Modal = ({ active, setActive, children }) => {
    return (
        <div onClick={() => setActive(false)} className={ active ? 'modal active' : 'modal'}>
            <div className={ active ? "modal_content active" : "modal_content"} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
};

export default Modal;