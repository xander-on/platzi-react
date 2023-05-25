import { useContext } from 'react';
import { TodosContext } from '../context';
import { ButtonTheme } from '../../theme/components';
import '../styles/todoCounter.css';

export const TodoCounter = () => {

    const { dataTodos } = useContext( TodosContext );
    const { completedTodos, totalTodos } = dataTodos;

    return(
        <div className="TodoCounter">
            <h1 >
                Has completado 
                <span className='color-theme'> { completedTodos} </span> de 
                <span className='color-theme'> {totalTodos} </span> TODOS
            </h1>
            <ButtonTheme />
        </div>
    );
}