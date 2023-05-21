import { useState } from 'react';
import { 
    TodoCounter, 
    TodoSearch, 
    TodoList, 
    TodoItem, 
    CreateTodoButton
} from './components/index';
import './App.css';

const defaultTodos = [
    {id:1, description: 'Desayunar un pan', completed: true,  deleted: false },
    {id:2, description: 'Hacer limpieza',   completed: false, deleted: false },
    {id:3, description: 'Hacer ejercicio',  completed: true,  deleted: false },
    {id:4, description: 'Estudiar React',   completed: false, deleted: false },
];

const App = () => {


    const [ todos, setTodos ] = useState(defaultTodos);
    const [ searchValue, setSearchValue ] = useState('');
    // console.log(`Los usuarios buscan todos de ${ searchValue }`);

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
        setTodos( newTodos );
    }

    const deleteTodo = (id) => {
        const newTodos = [...todos];
        newTodos[id-1].deleted = true;
        setTodos( newTodos );
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
