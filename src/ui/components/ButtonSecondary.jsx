import '../styles/ButtonSecondary.css';

export const ButtonSecondary = ({ text, action }) => {

    return (
        <button 
            className={"TodoForm-button TodoForm-button--cancel"}
            onClick  ={ action }
        >
            {text}
        </button>
    );
}
