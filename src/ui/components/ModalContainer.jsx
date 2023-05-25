import ReactDOM from 'react-dom';
import '../styles/ModalContainer.css';
import { ButtonPrimary, ButtonSecondary } from './';

export const ModalContainer = ({ 
    children, 
    openModal, 
    setOpenModal, 
    title,
    acctionSuccess
}) => {
    
    const modalRoot = document.getElementById('modal');

    if(!openModal) return (<></>);


    const closeModal = () => setOpenModal(false);

    const actionPrincipal = () => {
        acctionSuccess();
    }

    return ReactDOM.createPortal(

        <div className="modal-background">
            <div className="modal-container">
                <h3> {title} </h3>

                {children}

                <div className="TodoForm-buttonContainer">
                    <ButtonSecondary text={'Cancelar'} action={ closeModal } />
                    <ButtonPrimary   text={'Guardar'}  action={ actionPrincipal }/>
                </div>

            </div>
        </div>,
        modalRoot
    );
}
