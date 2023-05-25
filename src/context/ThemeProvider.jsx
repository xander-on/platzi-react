import { useState } from 'react';
import { ThemeContext } from './';

export const ThemeProvider = ({ children }) => {

    const [colorTheme, setColorTheme] = useState('red');
    const colorThemeState = { colorTheme, setColorTheme };

    const [openModalTheme, setOpenModalTheme] = useState(false);
    const openModalThemeState = { openModalTheme, setOpenModalTheme }

    return (
        <ThemeContext.Provider value={{
            colorThemeState,
            openModalThemeState
        }}>
            { children }
        </ThemeContext.Provider>
    );
}
