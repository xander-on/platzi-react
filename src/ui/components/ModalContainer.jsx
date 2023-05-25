import ReactDOM from 'react-dom';
import '../../theme/ModalContainer.css';

export const ModalContainer = ({ children, open }) => {
    const modalRoot = document.getElementById('modal');

    if(!open) return (<></>);

    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
        </div>,
        modalRoot
    );
}
