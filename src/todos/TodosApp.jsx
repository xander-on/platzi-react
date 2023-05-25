import { useContext } from 'react';
import { TodosContext } from './context/';
import { 
    TodoCounter, 
    TodoSearch, 
    TodoList, 
    CreateTodoButton,
    TodoForm
} from './components/';
import { ModalContainer } from '../ui'; 

export const TodosApp = () => {

    const { 
        openModalTodosState:{ openModal, setOpenModal }
    } = useContext( TodosContext );

    return (

        <div className='container todo-app'>
            <TodoCounter/>
            <TodoSearch />
            <TodoList />  
            <CreateTodoButton />

            
            <ModalContainer 
                openModal   ={openModal} 
                setOpenModal={setOpenModal}
                title       = {'Agrega un nuevo Todo'}
            >
                <TodoForm />
            </ModalContainer>
            
            
        </div>
    );
}
