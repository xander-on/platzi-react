import { useContext } from "react";
import { ThemeContext } from "../../context";
import '../styles/ThemeColorItem.css';

export const ThemeColorItem = ({ color }) => {

    const { 
        colorThemeState: { colorTheme, setColorTheme },
    } = useContext( ThemeContext );

    const onOptionChange = (event) => 
        setColorTheme(event.target.value);

    const isSelectedColor = () => 
        colorTheme === color 
            ? 'isSelectedColor'
            : ''


    return (
        <>
            <input 
                type    = "radio" 
                id      = {color} 
                name    = "colorOptions" 
                value   = {color}
                onChange= { onOptionChange }
            />
            <label 
                htmlFor={color} 
                style  ={{ background:color }}
                className={ isSelectedColor() }
            >
                {/* {color} */}
            </label>
        </>
    );
}
