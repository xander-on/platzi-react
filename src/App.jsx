import { 
    TodoCounter, 
    TodoSearch, 
    TodoList, 
    CreateTodoButton
} from './todos/components/';
import { TodosProvider } from './todos/context/';


export const App = () => {
    return (
        <TodosProvider>  
            <div className='container'>
                <TodoCounter/>
                <TodoSearch />
                <TodoList />  
                <CreateTodoButton />
            </div>
        </TodosProvider>
    );
}

