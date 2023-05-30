import { useEffect, useState } from 'react';
import { ThemeContext } from './';
import { useLocalStorage } from '../hooks';

export const ThemeProvider = ({ children }) => {

    const { 
        items:themeData, 
        saveItems:saveThemeData,
        loading,
        error
    } = useLocalStorage('THEME_DATA', {isDarkMode:false, colorTheme: ''});

    const dataThemeLocalStorage = { themeData, saveThemeData, loading, error };

    const [openModalTheme, setOpenModalTheme] = useState(false);
    const openModalThemeState = { openModalTheme, setOpenModalTheme }


    const setThemeApp = (darkMode, colorTheme) => {
        const body = document.querySelector('body');
        body.className = "";
        body.classList.add( darkMode ? 'darkmode' : 'lightmode' );
        body.classList.add(`color-${ colorTheme }`);
    }

    setThemeApp(themeData.isDarkMode, themeData.colorTheme);
    
    return (
        <ThemeContext.Provider value={{
            openModalThemeState,
            dataThemeLocalStorage,
            setThemeApp
        }}>
            { children }
        </ThemeContext.Provider>
    );
}
