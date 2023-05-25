import { useContext } from 'react';
import { TodosContext } from '../context';
import '../styles/todoCounter.css';

export const TodoCounter = () => {

    const { dataTodos } = useContext( TodosContext );
    const { completedTodos, totalTodos } = dataTodos;

    return(
        <div className="TodoCounter">
            <h1 >
                Has completado {completedTodos} de {totalTodos} TODOS
            </h1>
        </div>
    );
}