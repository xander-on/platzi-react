import ReactDOM from 'react-dom';
import '../styles/ModalContainer.css';
import { 
    ButtonCloseModal, 
    ButtonPrimary, 
    ButtonSecondary 
} from './';

export const ModalContainer = ({ 
    children, 
    openModal, 
    title,
    actionPrimary,
    actionSecondary,
    isDisabledButton,
    isActionsAvaible = true,
}) => {
    
    const modalRoot = document.getElementById('modal');

    if(!openModal) return (<></>);
    

    return ReactDOM.createPortal(

        <div className="modal-background">
            <div className="modal-container">

                <ButtonCloseModal action={ actionSecondary }/>

                <h2> {title} </h2>

                <div className="modal-main">
                    {children}
                </div>

                {
                    isActionsAvaible
                        ?   <div className="Modal-buttonContainer">
                                <ButtonSecondary text={'Cancelar'} action={ actionSecondary } />
                                <ButtonPrimary   text={'Guardar'}  action={ actionPrimary } isDisabledButton={isDisabledButton}/>
                            </div>
                        :   <></>
                }
                

            </div>
        </div>,
        modalRoot
    );
}
