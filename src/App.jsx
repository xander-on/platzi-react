import { ThemeProvider } from "./context";
import { TodosApp } from "./todos/TodosApp";
import { TodosProvider } from "./todos/context";
import { ThemeButton } from "./theme/components/";



export const App = () => {
    return (
        <ThemeProvider>
            <TodosProvider >
                <ThemeButton />
                <TodosApp />
            </TodosProvider>
        </ThemeProvider>
    );
}

