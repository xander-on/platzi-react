import { 
    TodoCounter, 
    TodoSearch, 
    TodoList, 
    CreateTodoButton,
    TodoForm
} from './components/';

export const TodosApp = () => {
    
    return (

        <div className='container todo-app'>
            <TodoCounter/>
            <TodoSearch />
            <TodoList />  
            <CreateTodoButton />
            <TodoForm/>
            <br />
            <br />
            <br />
            <br />
        </div>
    );
}
