
import '../styles/todoCounter.css';

export const TodoCounter = ({ total, completed }) => {
    return(
        <div className="TodoCounter">
            <h1 >
                Has completado {completed} de {total} TODOS
            </h1>
        </div>
        
    );
}