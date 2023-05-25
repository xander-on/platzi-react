import { useContext } from 'react';
import { TodosContext } from './context/';
import { 
    TodoCounter, 
    TodoSearch, 
    TodoList, 
    CreateTodoButton,
    TodoForm
} from './components/';

export const TodosApp = () => {

    const { 
        openModalTodosState:{ openModal, setOpenModal },
        actionsTodos:{ addTodo }
    } = useContext( TodosContext );

    return (

        <div className='container todo-app'>
            <TodoCounter/>
            <TodoSearch />
            <TodoList />  
            <CreateTodoButton />
            <TodoForm/>
        </div>
    );
}
