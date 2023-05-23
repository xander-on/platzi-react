import { LoadingResponse, IconMessage } from '../../ui';
import { handlerTodos } from "../helpers";
import { TodoItem } from "../components";
import { faCircleExclamation, faBoxOpen } from "@fortawesome/free-solid-svg-icons";


export const TodoList = ({ searchedTodos, dataTodosLocalStorage}) => {
    
    const {todos, saveTodos, loading, error}= dataTodosLocalStorage;
    const { completeTodo, deleteTodo } = handlerTodos(todos, saveTodos);


    return (
        <>
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
        </>
    );
}
