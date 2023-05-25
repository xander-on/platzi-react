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

    const { openModalState:{ openModal } } = useContext( TodosContext );

    return (

        <div className='container todo-app'>
            <TodoCounter/>
            <TodoSearch />
            <TodoList />  
            <CreateTodoButton />

            
            <ModalContainer open={openModal}>
                <TodoForm />
            </ModalContainer>
            
            
        </div>
    );
}
