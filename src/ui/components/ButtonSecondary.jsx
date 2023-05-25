import '../styles/ButtonSecondary.css';

export const ButtonSecondary = ({ action, text }) => {
    return (
        <button 
            className={"TodoForm-button TodoForm-button--cancel"}
            onClick  ={ action }
        >
            {text}
        </button>
    );
}
