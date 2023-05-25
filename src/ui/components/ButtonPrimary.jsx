import '../styles/ButtonPrimary.css';

export const ButtonPrimary = ({ text, action, isDisabledButton=false }) => {
    
    return (
        <button 
            className= {`TodoForm-button TodoForm-button--add ${isDisabledButton?'disabled': ''}`}
            onClick  = { action }
            disabled = { isDisabledButton }
        >
            {text}
        </button>
    );
}
