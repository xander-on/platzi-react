import { useEffect, useState } from 'react';
import { ThemeContext } from './';

export const ThemeProvider = ({ children }) => {

    const [colorTheme, setColorTheme] = useState('red');
    const colorThemeState = { colorTheme, setColorTheme };

    const [openModalTheme, setOpenModalTheme] = useState(false);
    const openModalThemeState = { openModalTheme, setOpenModalTheme }

    useEffect(() => {
        cambiarColorApp(colorTheme)
    }, [colorTheme])


    const cambiarColorApp = (color) => {
        const root = document.querySelector('body');
        console.log(root);
        root.className='';
        root.classList.add(`color-${color}`);
    }

    const handlerThemeColor = { cambiarColorApp }

    return (
        <ThemeContext.Provider value={{
            colorThemeState,
            openModalThemeState,
            handlerThemeColor
        }}>
            { children }
        </ThemeContext.Provider>
    );
}
