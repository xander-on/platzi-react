import { useContext } from "react";
import { ThemeContext } from "../../context";

export const ColorThemeItem = ({ color }) => {

    const { 
        colorThemeState: { setColorTheme }
    } = useContext( ThemeContext );

    const handleOptionChange = (event) => {
        console.log(`cambie de color a ${event.target.value}`);
        setColorTheme(event.target.value);
    };

    return (
        <div>
            <input 
                type    = "radio" 
                id      = {color} 
                name    = "colorOptions" 
                value   = {color}
                onChange= { handleOptionChange }
            />
            <label htmlFor={color}>
                {color}
            </label>
        </div>
    );
}
