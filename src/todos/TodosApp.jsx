import { 
    TodoCounter, 
    TodoSearch, 
    TodoList, 
    CreateTodoButton
} from './components/';
import { TodosProvider } from './context/';

export const TodosApp = () => {
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
