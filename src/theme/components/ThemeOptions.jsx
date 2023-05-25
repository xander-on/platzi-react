import { useContext } from "react";
import { ColorThemeItem } from "./";
import { ThemeContext } from "../../context";

export const ThemeOptions = () => {

    const { 
        openModalThemeState: { setOpenModalTheme }
    } = useContext( ThemeContext );

    const closeModalTheme = () => setOpenModalTheme(false);
    
    const themeColors = [ 'red', 'blue', 'yellow', 'green', 'pink'];

    return (
        <>
            {
                themeColors.map( color => 
                    <ColorThemeItem 
                        key      = { color } 
                        color    = { color }
                    />
                )
            }
        </>
    );
}
