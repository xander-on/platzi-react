import { useState } from 'react';
import { TodosContext } from './';
import { useLocalStorage } from '../../hooks';
import { getTodos, handlerTodos } from "../helpers";


export const TodosProvider = ({ children }) => {

    const [ searchValue, setSearchValue ] = useState('');

    const { 
        items:todos, 
        saveItems:saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    const dataTodosLocalStorage = { todos, saveTodos, loading, error };
    const { totalTodos, completedTodos, searchedTodos} = getTodos(todos, searchValue);
    const { completeTodo, deleteTodo } = handlerTodos(todos, saveTodos);

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