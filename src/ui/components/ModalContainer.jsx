import ReactDOM from 'react-dom';
import '../styles/ModalContainer.css';
import { ButtonPrimary, ButtonSecondary } from './';

export const ModalContainer = ({ 
    children, 
    openModal, 
    title,
    actionPrimary,
    actionSecondary,
    isDisabledButton,
}) => {
    
    const modalRoot = document.getElementById('modal');

    if(!openModal) return (<></>);
    

    return ReactDOM.createPortal(

        <div className="modal-background">
            <div className="modal-container">
                <h2> {title} </h2>

                <div className="modal-main">
                    {children}
                </div>

                <div className="Modal-buttonContainer">
                    <ButtonSecondary text={'Cancelar'} action={ actionSecondary } />
                    <ButtonPrimary   text={'Guardar'}  action={ actionPrimary } isDisabledButton={isDisabledButton}/>
                </div>

            </div>
        </div>,
        modalRoot
    );
}
