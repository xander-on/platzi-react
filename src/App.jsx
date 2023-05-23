import { useState } from 'react';
import { 
    TodoCounter, 
    TodoSearch, 
    TodoList, 
    TodoItem, 
    CreateTodoButton
} from './todos/components/index';
import { useLocalStorage } from './hooks';
import { getTodos, handlerTodos } from './todos/helpers/';
import { EmptyResponse, ErrorResponse, LoadingResponse } from './ui';
import { faCircleExclamation, faBoxOpen, faCircle } from "@fortawesome/free-solid-svg-icons";
import { IconMessage } from './ui/components/IconMessage';

export const App = () => {

    const { 
        items:todos, 
        saveItems:saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    const [ searchValue, setSearchValue ] = useState('');

    const { totalTodos, completedTodos, searchedTodos} = getTodos(todos, searchValue);
    const { completeTodo, deleteTodo } = handlerTodos(todos, saveTodos);

    return (
        <>
            <TodoCounter completed={completedTodos} total={totalTodos}/>

            <TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <TodoList>
                { loading && <LoadingResponse message={"Cargando TODOS..."}/> }
                { error   && <IconMessage icon={ faCircleExclamation } message='Ocurrio un error'/> }

                { 
                    (!error && !loading && searchedTodos.length === 0) 
                    && <IconMessage icon={ faBoxOpen } message='No se encontraron resultados'/> 
                }

                {
                    searchedTodos.map( ( todo ) => 
                        <TodoItem 
                            key={todo.id} 
                            todo={todo}
                            onComplete={ () => completeTodo(todo.id) }
                            onDelete  ={ () => deleteTodo(todo.id) }
                        />
                    )
                }
            </TodoList>

            <CreateTodoButton />
        </>
    );
}

