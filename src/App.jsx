import { useState } from 'react';
import { 
    TodoCounter, 
    TodoSearch, 
    TodoList, 
    TodoItem, 
    CreateTodoButton
} from './todos/components/index';
import { useLocalStorage } from './hooks';



const App = () => {

    const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
    const [ searchValue, setSearchValue ] = useState('');

    const todosAvailable = todos.filter( todo => todo.deleted !== true)
    const completedTodos = todosAvailable.filter( todo => !!todo.completed ).length;
    const totalTodos     = todosAvailable.length;

    const searchedTodos  = todosAvailable.filter( todo => 
        (
            todo.description.toLowerCase().includes(searchValue.toLowerCase()) 
            && todo.deleted !== true
        )
    );

    const completeTodo = (id) => {
        const newTodos = [...todos];
        newTodos[id-1].completed = !newTodos[id-1].completed;
        saveTodos( newTodos );
    }

    const deleteTodo = (id) => {
        const newTodos = [...todos];
        newTodos[id-1].deleted = true;
        saveTodos( newTodos );
    }

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
                            onDelete={ () => deleteTodo(todo.id) }
                        />
                    )
                }
            </TodoList>

            <CreateTodoButton />
        </>
    );
}

export default App;
