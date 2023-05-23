import { useState } from 'react';
import { 
    TodoCounter, 
    TodoSearch, 
    TodoList, 
    CreateTodoButton
} from './todos/components/index';
import { useLocalStorage } from './hooks';
import { getTodos } from './todos/helpers/';

export const App = () => {
    const [ searchValue, setSearchValue ] = useState('');

    const { 
            items:todos, 
            saveItems:saveTodos,
            loading,
            error
    } = useLocalStorage('TODOS_V1', []);

    const dataTodosLocalStorage = { todos, saveTodos, loading, error };
    const { totalTodos, completedTodos, searchedTodos} = getTodos(todos, searchValue);

    return (
        <>
            <TodoCounter completed={completedTodos} total={totalTodos}/>

            <TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <TodoList 
                searchedTodos={searchedTodos}
                dataTodosLocalStorage={dataTodosLocalStorage}   
            />
                

            <CreateTodoButton />
        </>
    );
}

