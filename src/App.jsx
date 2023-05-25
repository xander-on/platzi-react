import { ThemeProvider } from "./context";
import { TodosApp } from "./todos/TodosApp";
import { TodosProvider } from "./todos/context";


export const App = () => {
    return (
        <ThemeProvider>
            <TodosProvider >
                <TodosApp />
            </TodosProvider>
        </ThemeProvider>
    );
}

