import { useState } from 'react';
import { TodosContext } from './';
import { useLocalStorage } from '../../hooks';
import { getTodos, handlerTodos, searchTodos } from "../helpers";


export const TodosProvider = ({ children }) => {

    const [ searchValue, setSearchValue ] = useState('');
    const [ openModal, setOpenModal ]     = useState(false);

    const { 
        items:todos, 
        saveItems:saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    const dataTodosLocalStorage = { todos, saveTodos, loading, error };
    const openModalTodosState   = { openModal, setOpenModal };
    const searchValueState      = { searchValue, setSearchValue };

    const { totalTodos, completedTodos, todosAvailable} = getTodos(todos);
    const { searchedTodos } = searchTodos(todosAvailable, searchValue);
    const { addTodo, completeTodo, deleteTodo } = handlerTodos(dataTodosLocalStorage);
    
    const dataTodos    = { totalTodos, completedTodos, searchedTodos };
    const actionsTodos = { addTodo, completeTodo, deleteTodo };

    return(
        <TodosContext.Provider value={{
            searchValueState,
            openModalTodosState,
            dataTodosLocalStorage,
            dataTodos,
            actionsTodos,
        }}>
            { children }
        </TodosContext.Provider>
    );
}