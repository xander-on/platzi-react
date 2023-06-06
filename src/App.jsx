import { ThemeProvider } from "./context";
import { TodosApp } from "./todos/TodosApp";
import { TodosProvider } from "./todos/context";
import { ThemeButton } from "./theme/components/";
import { CoverScreen } from "./ui";



export const App = () => {
    return (
        <ThemeProvider>
            <TodosProvider >
                <CoverScreen />
                <ThemeButton />
                <TodosApp />
            </TodosProvider>
        </ThemeProvider>
    );
}

