import { useContext, useState } from 'react';
import { TodosContext } from '../context';
import '../styles/todoForm.css';


export const TodoForm = () => {

    const [newTodoValue, setNewTodoValue] = useState('');

    const { 
        openModalTodosState:{ setOpenModal },
        actionsTodos  :{ addTodo } 
    } = useContext( TodosContext );

    const isDescriptionValid = (newTodoValue.length >= 2) ? true : false;

    const onSubmit = (event) => {
        event.preventDefault();
        if(!isDescriptionValid) return;
        addTodo(newTodoValue.trim());
        setOpenModal(false);
    };
    
    // const onCancel = () => {
    //     setOpenModal(false);
    // };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return (
        <form onSubmit={ onSubmit }>
            
            <textarea 
                name     = "newTodoDescription" 
                value    = {newTodoValue}
                onChange = {onChange}
            ></textarea>

            {/* <div className="TodoForm-buttonContainer">
                <button 
                    className= "TodoForm-button TodoForm-button--cancel"
                    onClick  = { onCancel }
                >
                    Cancelar
                </button>

                <button 
                    className= {`TodoForm-button TodoForm-button--add ${isDescriptionValid ? '' : 'disabled'}`} 
                    type     = "submit"
                    disabled = { !isDescriptionValid }
                >
                    Añadir
                </button>
            </div> */}

        </form>
    );
}
