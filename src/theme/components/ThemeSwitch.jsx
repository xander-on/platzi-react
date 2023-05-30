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
            <div className="theme-switch-container">
                <h4 className='subtitle'>ThemeSwitch</h4>
                    
                <div className="dark-mode">
                    <span className="dark-mode-title">
                        <FontAwesomeIcon 
                            icon={darkMode ? faMoon : faSun}
                            fontSize={24}
                        />
                    </span>
                    <input 
                        onChange ={handleDarkMode} 
                        type     ="checkbox" 
                        className="checkbox" 
                        id       ="checkbox" 
                        checked  ={darkMode}
                    />
                    <label className="switch" htmlFor="checkbox" />
                </div>
                    
                
            </div>
        </>
    );
}
