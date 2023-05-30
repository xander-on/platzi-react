import { ThemeColorItem } from "./";

export const ThemeColors = () => {
    
    const themeColors = [ 'red', 'blue', 'yellow', 'green', 'pink'];

    return (
        <>
            <div className="theme-color-container">
                <h4 className="subtitle">Color del tema:</h4>
                <div className="colors-container">
                    {
                        themeColors.map( color => 
                            <ThemeColorItem 
                                key      = { color } 
                                color    = { color }
                            />
                        )
                    }
                </div>
           
            </div>
        </>
    );
}
