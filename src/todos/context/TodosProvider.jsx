import { useState } from 'react';
import { TodosContext } from './';
import { useLocalStorage } from '../../hooks';
import { getTodos, handlerTodos, searchTodos } from "../helpers";


export const TodosProvider = ({ children }) => {

    const { 
        items:todos, 
        saveItems:saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', [], 3000);

    const dataTodosLocalStorage = { todos, saveTodos, loading, error };

    const [ searchValue, setSearchValue ] = useState('');
    const searchValueState = { searchValue, setSearchValue };

    const [ openModal, setOpenModal ] = useState(false);
    const openModalTodosState   = { openModal, setOpenModal };

    const { totalTodos, completedTodos, todosAvailable} = getTodos(todos);
    const { searchedTodos } = searchTodos(todosAvailable, searchValue);
    const { addTodo, completeTodo, deleteTodo } = handlerTodos(dataTodosLocalStorage);
    
    const dataTodos    = { totalTodos, completedTodos, searchedTodos };
    const actionsTodos = { addTodo, completeTodo, deleteTodo };

    const [openModalDelete, setOpenModalDelete] = useState(false);
    const openModalDeleteState = { openModalDelete, setOpenModalDelete };

    return(
        <TodosContext.Provider value={{
            searchValueState,
            openModalTodosState,
            dataTodosLocalStorage,
            dataTodos,
            actionsTodos,
            openModalDeleteState,
        }}>
            { children }
        </TodosContext.Provider>
    );
}