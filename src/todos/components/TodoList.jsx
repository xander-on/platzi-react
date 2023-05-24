import { useContext } from 'react';
import { TodosContext } from '../context';
import { IconMessage } from '../../ui';
import { TodoItem, TodoLoadingSkeleton } from "../components";
import { faCircleExclamation, faBoxOpen } from "@fortawesome/free-solid-svg-icons";


export const TodoList = () => {

    const { 
        dataTodosLocalStorage, 
        searchedTodos, 
        completeTodo, 
        deleteTodo 
    } = useContext( TodosContext );

    const {loading, error} = dataTodosLocalStorage;
    
    return (
        <>
            { loading && <TodoLoadingSkeleton/>}
            { error   && <IconMessage icon={ faCircleExclamation } message='Ocurrio un error'/> }

            { 
                (!error && !loading && searchedTodos.length === 0) 
                && <IconMessage icon={ faBoxOpen } message='No se encontraron TODOS'/> 
            }

            {
                searchedTodos.map( ( todo ) => 
                    <TodoItem 
                        key={ todo.id } 
                        todo={ todo }
                        onComplete={ () => completeTodo(todo.id) }
                        onDelete  ={ () => deleteTodo(todo.id) }
                    />
                )
            }
        </>
    );
}
