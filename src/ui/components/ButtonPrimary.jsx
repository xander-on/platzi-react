import '../styles/ButtonPrimary.css';

export const ButtonPrimary = ({ text }) => {
    return (
        <button className={`TodoForm-button TodoForm-button--add`}>
            {text}
        </button>
    );
}
