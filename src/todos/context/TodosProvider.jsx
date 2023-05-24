import { useState } from 'react';
import { TodosContext } from './';
import { useLocalStorage } from '../../hooks';
import { getTodos, handlerTodos, searchTodos } from "../helpers";


export const TodosProvider = ({ children }) => {

    const [ searchValue, setSearchValue ] = useState('');

    const { 
        items:todos, 
        saveItems:saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    const dataTodosLocalStorage = { todos, saveTodos, loading, error };
    const { totalTodos, completedTodos, todosAvailable} = getTodos(todos);
    const { searchedTodos } = searchTodos(todosAvailable, searchValue);
    const { completeTodo, deleteTodo } = handlerTodos(dataTodosLocalStorage);

    return(
        <TodosContext.Provider value={{
            dataTodosLocalStorage,
            totalTodos, 
            completedTodos, 
            searchedTodos,
            searchValue,
            setSearchValue,
            completeTodo,
            deleteTodo
        }}>
            { children }
        </TodosContext.Provider>
    );
}