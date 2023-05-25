import { TodosApp } from "./todos/TodosApp";
import { TodosProvider } from "./todos/context";


export const App = () => {
    return (
        <TodosProvider >
            <TodosApp />
        </TodosProvider>
    );
}

