import { useContext } from 'react';
import { ThemeContext } from '../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import '../styles/ThemeSwitch.css';


export const ThemeSwitch = () => {

    const { 
        darkModeState:{darkMode, setDarkMode},
    } = useContext(ThemeContext);

    const handleDarkMode = () => setDarkMode(!darkMode);

    return (
        <>
            <h4>ThemeSwitch</h4>
            <div className="theme-switch-container">
                    
                <div className="dark-mode">
                    <p className="dark-mode-title">
                        <FontAwesomeIcon 
                            icon={darkMode ? faMoon : faSun}
                            fontSize={24}
                        />
                    </p>
                    <input 
                        onChange ={handleDarkMode} 
                        type     ="checkbox" 
                        className="checkbox" 
                        id       ="checkbox" 
                        checked  ={darkMode}
                    />
                    <label className="switch" htmlFor="checkbox">
                    </label>
                </div>
                    
                
            </div>
        </>
    );
}
