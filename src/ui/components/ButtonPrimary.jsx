import '../styles/ButtonPrimary.css';

export const ButtonPrimary = ({ text, action, isDisabledButton=false }) => {
    
    return (
        <button 
            className= {`Modal-button Modal-button--add ${isDisabledButton?'disabled': ''}`}
            onClick  = { action }
            disabled = { isDisabledButton }
        >
            {text}
        </button>
    );
}
