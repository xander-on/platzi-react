import { useEffect, useState } from 'react';
import { ThemeContext } from './';

export const ThemeProvider = ({ children }) => {

    const [openModalTheme, setOpenModalTheme] = useState(false);
    const openModalThemeState = { openModalTheme, setOpenModalTheme }

    const [colorTheme, setColorTheme] = useState('red');
    const colorThemeState = { colorTheme, setColorTheme };

    const [darkMode, setDarkMode] = useState(false);
    const darkModeState = { darkMode, setDarkMode };

    const setThemeApp = () => {
        const body = document.querySelector('body');
        body.className = "";
        body.classList.add( darkMode ? 'darkmode' : 'lightmode' );
        body.classList.add(`color-${colorTheme}`);
    }

    useEffect( setThemeApp, [colorTheme, darkMode] );
    
    return (
        <ThemeContext.Provider value={{
            colorThemeState,
            openModalThemeState,
            darkModeState,
        }}>
            { children }
        </ThemeContext.Provider>
    );
}
