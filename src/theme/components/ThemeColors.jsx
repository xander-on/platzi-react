import { ThemeColorItem } from "./";

export const ThemeColors = () => {
    
    const themeColors = [ 'red', 'blue', 'yellow', 'green', 'pink'];

    return (
        <>
            <h4>Color del tema:</h4>
            <div className="theme-color-container">
            {
                themeColors.map( color => 
                    <ThemeColorItem 
                        key      = { color } 
                        color    = { color }
                    />
                )
            }
            </div>
        </>
    );
}
