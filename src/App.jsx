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


const App = () => {

    const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
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

export default App;
